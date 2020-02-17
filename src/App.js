import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import logo from './images/logo.png';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Room from './pages/Room';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import data from './dataGenerator';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      arrayRooms:[]
    };
  }

  componentDidMount(){
    this.setState({arrayRooms:data(20)});
  }
  
  render(){
    return (
      <Router>
        <Header logo={logo}/>
        <Switch>
          <Route path='/rooms/:roomId' render={(routeProps) => <Room {...routeProps} arrayRooms={this.state.arrayRooms}></Room>}/>
          <Route path='/rooms'>
            <Rooms arrayRooms={this.state.arrayRooms}/>
          </Route>
          <Route path='/error'>
            <Error/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
        <Footer logo={logo}/>
      </Router>
    );
  }

}

export default App;
