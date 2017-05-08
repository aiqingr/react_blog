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
        { this.props.children }
      </div>
    )
  }
}

//Pages
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <div>Some home page content</div>
      </div>
    )
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <h2>about</h2>
        <div>Some about page content</div>
      </div>
    )
  }
}

class Work extends Component {
  render(){
    return (
      <div>
        <h2>Work</h2>
        <div>Some work page content</div>
      </div>
    )
  }
}
class Contact extends Component {
  render(){
    return (
      <div>
        <h2>Contact</h2>
        <div>Some contact page content</div>
      </div>
    )
  }
}
class NoMatch extends Component {
  render(){
    return (
      <div>
        <h2>NoMatch</h2>
        <div>404 error</div>
      </div>
    )
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="work" component={Work}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
