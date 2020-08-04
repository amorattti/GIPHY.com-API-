import React from 'react';
import PropTypes from "prop-types";
const LOADER = `https://media0.giphy.com/media/l0HlTy9x8FZo0XO1i/200w.webp`;

const Gif = ({ data, loader }) => {
    return (
        <div className="gif">
            <h3>{data.title}</h3>
            <a href={data.gifUrl} target="new">
                {loader ? 
                  <img src={LOADER} /> : <img src={data.image}/>
                }
            </a>
        </div>
    );
};

Gif.propTypes = {
    data: PropTypes.shape({
        gifUrl: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string
    }),
    loader: PropTypes.bool,
};

export default Gif
