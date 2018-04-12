import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

    }

    handleChange(event) {
        const searchTextt = event.target.value;
        this.setState({
            searchText: searchTextt
        })
        if(searchTextt.length > 2) {
            this.props.onSearch(searchTextt)
        }

    }

    handleKeyUp(event) {
        if (event.keyCode === 13) {
            this.props.onSearch(this.state.searchText)
        }
    }

    render() {
        return (
            <div>
                 <input type="text"
                     onChange ={this.handleChange.bind(this)}
                     onKeyUp = {this.handleKeyUp.bind(this)}
                     placeholder="wpisz fraze"
                     value={this.state.searchText}
                  />
            </div>
        )
    }
}

export default Search
