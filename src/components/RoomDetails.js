import React from 'react';

export default function RoomDetails({data:{price, capacity, breakfast, pets, spa, minibar}}){
    return(
        <div className="col-4 d-flex justify-content-center py-4">
            <div>
                <h3 className="text-white border-bottom">Room Details</h3>
                <p className="text-white"><span className="font-weight-bold">Price:</span> ${price} USD</p>
                <p className="text-white"><span className="font-weight-bold">Capacity:</span> {capacity} People</p>
                {!breakfast ? '' : <p className="text-white">Breakfast included</p>}
                {!pets ? '' : <p className="text-white">Pets included</p>}
                {!spa ? '' : <p className="text-white">Spa included</p>}
                {!minibar ? '' : <p className="text-white">Minibar included</p>}
            </div>
        </div>
    );
}