import React, { Component } from 'react';
import './CSS.Components/BackgroundImage.css';
import './img/ReactImage.jpg';

export class Intro extends Component {
  static displayName = Intro.name;

  render () {
    return (
      <React.Fragment>
      <img src={require('./img/ReactImage.jpg')} alt=""/>
        <h1>Be Fearless</h1>
        <p>Welcome to a small blog for 2 Southeastern students.</p>
        
        <p>To help you get started, this is a list of our Current Topics:</p>
        <ul>
          <li><strong>Scottie C</strong>:
           Fighting <em>Resistance</em> <em>The Art of War</em> short book on learning to conquer the innner-battles with yourself</li>
          <li><strong>Tristian</strong>: Topics comming soon...</li>
          <li><strong>Scottie C</strong>: How I started in Software Development</li>
        </ul>
      </React.Fragment>
    );
  }
}
