import React, { useState } from 'react';
import './VideoGallery.css';

const VideoGallery = () => {
  const [videos, setVideos] = useState([
    { title: 'Video 1', file: '/videos/video1.mp4' },
    { title: 'Video 2', file: '/videos/video2.mp4' },
    { title: 'Video 3', file: '/videos/video3.mp4' },
    { title: 'Video 4', file: '/videos/video4.mp4' },
    { title: 'Video 5', file: '/videos/video5.mp4' },
    { title: 'Video 6', file: '/videos/video6.mp4' },
  ]);
  const [newVideoUrl, setNewVideoUrl] = useState('');

  const addVideo = () => {
    if (newVideoUrl.trim() !== '') {
      setVideos([...videos, { title: 'New Video', file: newVideoUrl }]);
      setNewVideoUrl('');
    }
  };

  return (
    <div className="video-gallery">
      <h1>Video Gallery</h1>
      <div className="video-form">
        <input
          type="text"
          placeholder="Enter URL"
          value={newVideoUrl}
          onChange={(e) => setNewVideoUrl(e.target.value)}
        />
        <button onClick={addVideo}>Add Video</button>
      </div>
      <div className="video-thumbnails">
        {videos.map((video, index) => (
          <div key={index} className="video-thumbnail">
            <h3>{video.title}</h3>
            <video controls className='video-thumbnails'>
              <source src={video.file} type="video/mp4" />
              {/* Your browser does not support the video tag. */}
            </video>
            
          </div>
        ))}
      </div>
    
      
    </div>
  );
};

export default VideoGallery;
