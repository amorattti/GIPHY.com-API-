import React, { Component } from 'react';
const LOADER = `https://media1.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif`;

class Gif extends Component {

    handleLoader() {
        const loaderFlag = this.props.loader;
        const setLoader = loaderFlag ? LOADER : this.props.data.image;
        return setLoader
    }

    render() {
        return (
            <div>
                <h3>{this.props.data.title}</h3>
                <a href={this.props.data.gifUrl} target="new">
                    <img src={this.handleLoader()}/>
                </a>
            </div>
        );
    }
}

export default Gif
