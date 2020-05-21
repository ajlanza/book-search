import React, { Component } from 'react';
import './searchBar.css'

export default class SearchBar extends Component {
  
    
    render() {
    return(
      <form className="searchBar">
        <label htmlFor="search">Search:</label>
        <input type="text" id="book" name="book" placeholder="example" />
        <input type="button" value="Search" onClick={e => this.props.newSearch(document.getElementById("book").value)} />
      </form>
    )
  }
}