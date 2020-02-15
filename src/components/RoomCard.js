import React from 'react';
import {Link} from 'react-router-dom';

export default function RoomCard({data:{infoData:{id, label, price, capacity}, visualData:{mainPhoto}}}){
    return(
        <div className="col mb-4">
            <div className="card">
            <img src={mainPhoto} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title font-weight-bold">{label}</h5>
                <p className="card-text mb-0 "><span className="font-weight-bold">Price:</span> ${price} USD</p>
                <p className="card-text mb-0"><span className="font-weight-bold">Capacity:</span> {capacity} People</p>
                <div className="d-flex justify-content-center mt-2"><Link to={`/rooms/${id}`} className="btn btn-primary px-4">Look Room</Link></div>
            </div>
            </div>
        </div>
    );
}