import React from 'react';
//import image1 from '../images/details-1.jpeg';

export default function Service({title, description, iconClass}){
    const iconClassName = `d-flex justify-content-center pt-3 ${iconClass}`;
    return(
        <div className="col mb-4">
            <div className="card h-100 bg-light">
                <i className={iconClassName}></i>
                {/*<img src={image1} className="card-img-top" alt="..."/>*/}
                <div className="card-body  text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text ">{description}</p>
                </div>
            </div>
        </div>
    );
}