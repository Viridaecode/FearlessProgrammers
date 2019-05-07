import React, { Component, Fragment } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Intro } from './components/Intro';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Scott } from './components/Scott';




export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <React.Fragment>
        <Layout>
          <Route exact path='/intro' component={Intro} />
          <Route path='/counter' component={Counter} />
          <Route path='/fetch-data' component={FetchData} />
          <Route path='/scott' component={Scott} />
        </Layout>
      </React.Fragment>
    );
  }
}
