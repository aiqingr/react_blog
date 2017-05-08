import React, {Component} from 'react';
import {Route, IndexRoute, Link} from 'react-router';

class App extends Component {
  ComponentDidMount() {
    document.bodu.className = ''
  }
  render() {
    return (
      <div>
        <h1>React Universal Blog</h1>
        <nav>
          <ul>
            <li><link to = "/">Home</link></li>
            <li><link to = "/about">About</link></li>
            <li><link to = "work">Work</link></li>
            <li></li>
          </ul>
        </nav>
      </div>
    )
  }
}
