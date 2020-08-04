import React, { useState } from 'react';
import Search from './Search';
import Gif from './Gif';
import Trending from './Trending';
import { fetchRandomGif } from '../api/fetch.gif'

const App = () => {
    const [searchText, setSearchState] = useState('');
    const [gif, setGif] = useState({});
    const [loader, setLoader] = useState(true);
    const [isError, setIsError] = useState(false);

    const search = async (searchText) => {
        setIsError(false);
        setLoader(true);
        
        try {
            const { data } = await fetchRandomGif(searchText);
            const getDetails = {
                image: data.fixed_height_downsampled_url,
                title: data.title,
                gifUrl: data.url
            }
            setGif(getDetails);
            setSearchState(searchText);
        } catch (error) {
            setIsError(true);
            console.log(error);
        }
        setLoader(false);
    };

    return (
        <div className="container">
            <h1 className="inscApp">The GIF Search </h1>
            <Search
                onSearch={search}
            />
            { isError && <div>Something went wrong ...</div> }
            <Gif
                loader={loader}
                data={gif}
            />
            <Trending />
        </div>
    );
};

export default App;

