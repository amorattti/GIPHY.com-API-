import PropTypes from "prop-types";
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [value, setValue] = useState(0);
    const [errValue, setErrValue] = useState('');

    const handleKeyUp = event => {
        if (errValue !== '') setErrValue('');
        if (event.keyCode === 13) {
            event.preventDefault();
            if (value.length > 2) {
                onSearch(value);
                setErrValue('')
            } else {
                setErrValue('Too short')
            };
        };
    };

    return (
        <div className="search">
            <input type="text"
                onChange={e => setValue(e.target.value)}
                onKeyUp={handleKeyUp}
                placeholder="Search GIF"
            />
            <span>{errValue}</span>
        </div>
    );
};

Search.propTypes = {
    onSearch: PropTypes.func
};

export default Search
