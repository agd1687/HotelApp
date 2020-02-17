import React from 'react';
import Slider from '../components/Slider';
import Section from '../components/Section';
import RoomsList from '../components/RoomsList';
import RoomsFilters from '../components/RoomsFilters';

export default class Rooms extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            currentFilters:{type:'all', minPrice:0, maxPrice:600, capacity:0, breakfast:false, pets:false, spa:false, minibar:false}
        };
        this.filterRooms = this.filterRooms.bind(this);
    }        

    render(){
        const sliderTitle = "Best Service!";
        const sliderDescription = "Here in Hotel Karlton we provide five starts services.";
        const sliderButtonLabel = "Our Services";
        
        return(
            <main>
                <div className="container">
                    <Slider title={sliderTitle} description={sliderDescription} buttonLabel={sliderButtonLabel} buttonURL="/" />
                    <Section title="Search Room">
                        <RoomsFilters filterMethod={this.handleRoomsFilters} currentFilters={this.state.currentFilters} clearFiltersMethod={this.handleClearFilters}/>
                        <RoomsList data={ this.filterRooms}/>
                    </Section>
                </div>
            </main>
        );
    }
   
        handleClearFilters = (e) => {
            e.preventDefault();
            this.setState({currentFilters:{type:'all', minPrice:0, maxPrice:600, capacity:0, breakfast:false, pets:false, spa:false, minibar:false}});
        };
    
        handleRoomsFilters = ({target}) => {
            target.type === 'checkbox' ? this.setState(state => ({currentFilters:{...state.currentFilters, [target.name]:target.checked}})) : 
            this.setState(state => ({currentFilters:{...state.currentFilters, [target.name]:target.value}}))
        };
    
        filterRooms = function() {
            const {type, minPrice, maxPrice, capacity, breakfast, pets, spa, minibar} = this.state.currentFilters;
            const rooms =  this.props.arrayRooms;
            const roomsFilteredType = type === 'all' ? [...rooms] : rooms.filter(room => room.infoData.type === type);
            const roomsFilteredPrice = roomsFilteredType.filter(room => room.infoData.price >= minPrice && room.infoData.price <= maxPrice);
            // eslint-disable-next-line
            const roomsFilteredCapacity = capacity <= 0 ? [...roomsFilteredPrice] : roomsFilteredPrice.filter(room => room.infoData.capacity == capacity);
            const roomsFilteredBreakfast = !breakfast ? [...roomsFilteredCapacity] : roomsFilteredCapacity.filter(room => room.infoData.breakfast === breakfast);
            const roomsFilteredPets = !pets ? [...roomsFilteredBreakfast] : roomsFilteredBreakfast.filter(room => room.infoData.pets === pets);
            const roomsFilteredSpa = !spa ? [...roomsFilteredPets] : roomsFilteredPets.filter(room => room.infoData.spa === spa);
            const roomsFilteredMinibar = !minibar ? [...roomsFilteredSpa] : roomsFilteredSpa.filter(room => room.infoData.minibar === minibar);
            return roomsFilteredMinibar;
        };
}