import React, { Component } from 'react';

export default class Book extends Component {
  render(){
    return (
      <div>
          title is {this.props.title} and author is {this.props.author}
      </div>
    )
  }
}