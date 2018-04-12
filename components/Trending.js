import React, { Component } from 'react';
import { API_GIPHY } from './App'

class Trending extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gifs : {data:[]}
        };
    }

    componentDidMount() {
        fetch(`http://api.giphy.com/v1/gifs/trending?&api_key=${API_GIPHY}&limit=5`)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then((result) => {
                this.setState({
                    gifs: result,
                    });
                })
    }

    render() {
        const listItems = this.state.gifs.data.map((item) =>
            <a href={item.url} target="new" key={item.id}>
                <img src={item.images.original.url} />
            </a>
        );
        return (
            <div>{listItems}</div>
        )
    }
}

export default Trending;
