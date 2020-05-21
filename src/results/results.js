import React, { Component } from 'react';
import Book from './book';

export default class Results extends Component {
  
  render() {
    // const { titles, authors, ...books } = this.props;
    const bookInfo = this.props.books.map((item, i) => (
      <Book 
        key={i}
        title={item.volumeInfo.title}
        author={item.volumeInfo.authors}
        />
    ))
    console.log(bookInfo)
    
    
    return(
      <div className="results">
        {bookInfo}
      </div>
    )
  }
}