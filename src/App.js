import React, { Component } from 'react';
import Hero from './hero/hero';
import SearchBar from './searchBar/searchBar';
import Results from './results/results';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }
  
  newSearch(searchTerm) {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?maxResults=5&';
    const newUrl = baseUrl + 'q=' + searchTerm;
        
    fetch(newUrl)
      .then(res => {
        if(!res.ok) {
          throw new Error ('Something went wrong, please try again later');
        }
        return res;
        })
      .then(res => res.json())
      .then(data => {
        console.log(data.items.length);
         this.setState({
           books: data.items,
          //  titles: (Object.keys(data.items).map(key => data.items[key].volumeInfo.title))
         });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });  
  }

  componentDidMount() {
    const initialUrl = 'https://www.googleapis.com/books/v1/volumes?maxResults=5&q=example';
        
    fetch(initialUrl)
      .then(res => {
        if(!res.ok) {
          throw new Error ('Something went wrong, please try again later');
        }
        return res;
        })
      .then(res => res.json())
      .then(data => {
         this.setState({
           books: data.items
           //titles: (Object.keys(data.items).map(key => data.items[key].volumeInfo.title))
         });
        // const titles = Object.data.items.map(key => data.items[key].volumeInfo.title);
        // console.log(titles);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });  
  }

  setSearch(searchTerm) {
    console.log(searchTerm);
    console.log(this.state.searchTerm)
    this.setState ({
      searchTerm
    });
    console.log(this.state.searchTerm);
  }
  
  render() {
    return (
      <div>
        <Hero />
        <SearchBar newSearch={searchTerm => this.newSearch(searchTerm)}/>
    
        <Results books={this.state.books} />
        
        
      </div>
    );
  }
}