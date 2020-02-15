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
      arrayRooms:[],
      arrayRoomsFiltered:[],
      currentFilters:{type:'all', minPrice:0, maxPrice:600, capacity:0, breakfast:false, pets:false, spa:false, minibar:false}
    };
    this.filterRooms = this.filterRooms.bind(this);
  }

  componentDidMount(){
    this.setState({arrayRooms:data(20)}, () => this.setState({arrayRoomsFiltered:[...this.state.arrayRooms]}));
  }

  handleClearFilters = (e) => {
    e.preventDefault();
    this.setState({currentFilters:{type:'all', minPrice:0, maxPrice:600, capacity:0, breakfast:false, pets:false, spa:false, minibar:false}}, () => this.filterRooms());
  };

  handleRoomsFilters = (filterType, {target}) => {
    target.type === 'checkbox' ? this.setState({currentFilters:{...this.state.currentFilters, [filterType]:target.checked}}, () => this.filterRooms()) : this.setState({currentFilters:{...this.state.currentFilters, [filterType]:target.value}}, () => this.filterRooms())
    
  };

  filterRooms = function() {
    const {type, minPrice, maxPrice, capacity, breakfast, pets, spa, minibar} = this.state.currentFilters;
    const rooms = this.state.arrayRooms;
    const roomsFilteredType = type === 'all' ? [...rooms] : rooms.filter(room => room.infoData.type === type);
    const roomsFilteredPrice = roomsFilteredType.filter(room => room.infoData.price >= minPrice && room.infoData.price <= maxPrice);
    // eslint-disable-next-line
    const roomsFilteredCapacity = capacity <= 0 ? [...roomsFilteredPrice] : roomsFilteredPrice.filter(room => room.infoData.capacity == capacity);
    const roomsFilteredBreakfast = !breakfast ? [...roomsFilteredCapacity] : roomsFilteredCapacity.filter(room => room.infoData.breakfast === breakfast);
    const roomsFilteredPets = !pets ? [...roomsFilteredBreakfast] : roomsFilteredBreakfast.filter(room => room.infoData.pets === pets);
    const roomsFilteredSpa = !spa ? [...roomsFilteredPets] : roomsFilteredPets.filter(room => room.infoData.spa === spa);
    const roomsFilteredMinibar = !minibar ? [...roomsFilteredSpa] : roomsFilteredSpa.filter(room => room.infoData.minibar === minibar);
    this.setState({arrayRoomsFiltered:roomsFilteredMinibar});
  };

  render(){
    return (
      <Router>
        <Header logo={logo}/>
        <Switch>
          <Route path='/rooms/:roomId' render={(routeProps) => <Room {...routeProps} arrayRooms={this.state.arrayRooms}></Room>}/>
          <Route path='/rooms'>
            <Rooms data={this.state.arrayRoomsFiltered} filterMethod={this.handleRoomsFilters} currentFilters={this.state.currentFilters} clearFiltersMethod={this.handleClearFilters}/>
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
