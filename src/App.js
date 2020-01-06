import React, {Component} from 'react';
import './Global.css';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/badges" component={Badges}/>
            <Route exact path="/badges/new" component={BadgeNew}/>
            <Route component={NotFound}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App;
