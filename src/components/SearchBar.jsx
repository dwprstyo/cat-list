import React, { Component } from "react";
import "../css/search-bar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar-wrapper">
        <input className="search" type="text" name="search" placeholder="Search" onChange={this.props.search}/>
      </div>
    );
  }
}

export default SearchBar;
