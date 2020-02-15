import React from 'react';
import RoomCard from './RoomCard';

export default function RoomList({data}){

    return(
        <div className="row row-cols-1 row-cols-md-4 px-4 d-flex justify-content-center" style={{minHeight: '350px'}}>
            {data.map((room) => <RoomCard key={room['infoData']['id']} data={room}/>)}
            {data.length === 0 ? <h1 className="align-self-center text-white">Any Result</h1> : <></>}
        </div>
    );
}