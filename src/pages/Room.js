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
    
    if(!roomData){
        return <h1 className="text-white">Loading...</h1>;
    }

    return (
        <>
            <Slider infoType="rooms"/>
            <Section title={roomData.infoData.label}>
                <GalleryPhotos data={roomData.visualData}/>
                <RoomDetails data={roomData.infoData}/> 
            </Section>
        </>

    );
}