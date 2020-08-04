import React, { useState, useEffect, useCallback } from 'react';
import { fetchTrendingGifs } from '../api/fetch.gif';

const Trending = () => {
    const [giphs, setGiphs] = useState({ data: [] });
    const [loader, setLoader] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchApi = useCallback(
        async () => {
            setLoader(true);
            try {
                const response = await fetchTrendingGifs();
                setGiphs(response);
            } catch (error) {
                console.log(error);
                setIsError(error);
            }       
            setLoader(false);
        }, [fetchTrendingGifs]
    );

    useEffect(() => {
        fetchApi();
    }, []);

    const listItems = giphs.data.map((item) =>
        <a href={item.url} target="new" key={item.id}>
            <img src={item.images.original.url} />
        </a>
    );

    return (
        <div className="pakageTrending">
            <h1>Top Trending</h1>
            <div className="trending">  
            { loader ? <h2>...loading</h2> : listItems } 
            { isError && <div>Something went wrong ...</div> }
            </div>  
        </div>
    );
};

export default Trending;