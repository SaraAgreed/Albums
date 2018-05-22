import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
//set default values to our component
state = { albums: [] };     //the album array is set to empty

    componentWillMount() {      //will be called before the render method
       axios.get('https://rallycoding.herokuapp.com/api/music_albums')
       .then(response => this.setState({albums:response.data}));
    }

    renderAlbums() {
      return  this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
    }

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
    
}

export default AlbumList;