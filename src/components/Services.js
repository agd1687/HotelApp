import React from 'react';
import Service from './Service';

export default function Services(){
    return(
        <div id="services" name="services" className="row row-cols-1 row-cols-md-4 px-4">
            <Service iconClass="fas fa-utensils fa-5x" title="Breakfast" description="Every room include free breakfast."/>
            <Service iconClass="fas fa-dog fa-5x" title="Pets" description="We provide a specialized pets center."/>
            <Service iconClass="fas fa-spa fa-5x" title="Spa" description="Our Premiun, Luxury and Presidential rooms include free Spa service."/>
            <Service iconClass="fas fa-glass-martini fa-5x" title="Minibar" description="Our Luxury and Presidential rooms include free minibar service."/>
        </div>
    );
}