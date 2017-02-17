import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDd7OxTnJKGu1H5W5Irc2ybu6rkwOhHiQc';

class App  extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('kittens');
  }

  videoSearch(term){
    YTSearch({ term, key: API_KEY}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);
    return (
      <div>
        <SearchBar
          onSearchTermChange = { videoSearch }
         />
        <VideoDetail
          video = { this.state.selectedVideo }
        />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos = { this.state.videos }
        />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
