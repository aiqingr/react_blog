//App.js
import React, {Component} from 'react';

//Dispatcher
import AppDispatcher from '../dispatcher/AppDispatcher';

//Store
import AppStore from '../stores/AppStore';

import Nav from './Partial/Nav';
import Footer from './Partial/Footer';
import Loading from './Partial/Loading';

export default class App extends Component {
  //Add change listeners to stores
  componentDidMount() {
    AppStore.addChangeListener(this._onChange.bind(this));
  }

  //Remove change listener from stores
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange.bind(this));
  }

  ._onChange() {
    this.setState(AppStore);
  }
  render() {
    const data = AppStore.data

    //Show loading for browser
    if(!data.ready) {
      document.body.className = '';
      this.getStore();
      let style = {
        marginTop: 120
      }

      return (
        <div className="container text-center" style={ stylt }>
          <Loading />
        </div>
      )
    }

    //Server first
    const Routes = React.cloneElement(this.props.children, { data: data });

    return (
      <div>
        <Nav data={ data } />
        {Routes}
        <Footer data={ data } />
      </div>
    )
  }
}
