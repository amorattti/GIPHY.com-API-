import React, { Component } from 'react';
import styles from './style.scss';
import Search from './Search.js'
const API_GIPHY = 'aUhPqNQX1V9W5wSNJ9J0FOaQdvwgHH7O';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            loader : false,
            searchText : '',
            gif : {},
            test : 'krowa'
        };
    }

    searchGif(searchText) {
        this.setState({
            loader: true
        });
        this.getUrl(searchText, gif => { // callback(myJson)
            const getDetails = {
                image : gif.data.fixed_height_downsampled_url,
                title :  gif.data.title,
                gifUrl : gif.data.url
            }
            this.setState({
                loader : true,
                searchText: searchText,
                gif : getDetails
            });
        })
    }

    getUrl(searchText, callback) {
        const url = `http://api.giphy.com/v1/gifs/random?&tag=${searchText}&api_key=${API_GIPHY}`
        fetch(url)
        .then(response => response.json())
        .then(myJson => callback(myJson))
    }

    render() {
        console.log('tu state', this.state)
        return (
            <div style={styles}>
                <h1>The GIF Search </h1>
                <Search
                    onSearch={this.searchGif.bind(this)}
                    test={this.state.test}
                />
            </div>
        );
    }
}

export default App;
