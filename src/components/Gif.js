import React from 'react';
import PropTypes from "prop-types";

const Gif = ({ data, loader }) => {
    const handleLoader = () => {
        if(!Object.keys(data).length){
           return `https://media0.giphy.com/media/l0HlTy9x8FZo0XO1i/200w.webp`
        }
        return `https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif` 
    }    

    return (
        <div className="gif">
            <h3>{data.title}</h3>
            <a href={data.gifUrl} target="new">
                { loader ?
                    <img src={handleLoader()} /> : <img src={data.image} />
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
