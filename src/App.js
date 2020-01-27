import React, {Component} from 'react';

import {Provider} from 'react-redux';
import store from './store'
import DocumentContainer from './components/DocumentList/DocumentContainer'

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{

  render(){
    return(
      <Provider store={store}>
        <DocumentContainer/>
      </Provider>
    )
  }
}

export default App;
