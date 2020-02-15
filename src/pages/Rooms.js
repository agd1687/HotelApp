import React from 'react';
import Slider from '../components/Slider';
import Section from '../components/Section';
import RoomsList from '../components/RoomsList';
import RoomsFilters from '../components/RoomsFilters';

export default function({data, filterMethod, currentFilters, clearFiltersMethod}){
    
    const sliderTitle = "Best Service!";
    const sliderDescription = "Here in Hotel Karlton we provide five starts services.";
    const sliderButtonLabel = "Our Services";
    
    return(
        <main>
            <div className="container">
                <Slider title={sliderTitle} description={sliderDescription} buttonLabel={sliderButtonLabel} buttonURL="/" />
                <Section title="Search Room">
                    <RoomsFilters filterMethod={filterMethod} currentFilters={currentFilters} clearFiltersMethod={clearFiltersMethod}/>
                    <RoomsList data={data}/>
                </Section>
            </div>
        </main>
    );
}