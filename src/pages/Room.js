import React from 'react';
import Section from '../components/Section';
import RoomDetails from '../components/RoomDetails';
import GalleryPhotos from '../components/GalleryPhotos';
import Slider from '../components/Slider';

export default function Room(props){
    
    return(
        <main>
            <div className="container">
                {getRoomDataFromProps(props)}
            </div>
        </main>
    );
}

function getRoomDataFromProps(props){
    // eslint-disable-next-line
    const roomData = props.arrayRooms.find((room) => room.infoData.id == props.match.params.roomId);
    
    const sliderTitle = "25% OFF!";
    const sliderDescription = "Valentine's Day is this Friday and to help celebrate save 25% in our rooms this month.";
    const sliderButtonLabel = "Our Rooms";
    
    if(!roomData){
        return <h1 className="text-white">Loading...</h1>;
    }

    return (
        <>
            <Slider title={sliderTitle} description={sliderDescription} buttonLabel={sliderButtonLabel} buttonURL="/rooms" />
            <Section title={roomData.infoData.label}>
                <GalleryPhotos data={roomData.visualData}/>
                <RoomDetails data={roomData.infoData}/> 
            </Section>
        </>

    );
}