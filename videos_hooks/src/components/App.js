import React, { useState, useEffect } from 'react';
import useVideos from '../hooks/useVideos';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videos, search } = useVideos('kids');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className='ui container'>
      <SearchBar onTermSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
