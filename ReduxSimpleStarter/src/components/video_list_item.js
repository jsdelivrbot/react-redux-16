import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {
  const snip = video.snippet;

  return (
      <li
        className="list-group-item"
        onClick={() => onVideoSelect(video) }
      >
        <div className="video-list media">
          <div className="media-left">
            <img
              className="media-object"
              src={ snip.thumbnails.default.url }
            />
          </div>
          <div className="media-body">
            <div className="media-heading">
              { snip.title }
            </div>
          </div>
        </div>
      </li>
  );
};
export default VideoListItem;
