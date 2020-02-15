import React from 'react';
import Slider from '../components/Slider';
import Section from '../components/Section';
import Services from '../components/Services';

export default function Home(){
    
    const sliderTitle = "25% OFF!";
    const sliderDescription = "Valentine's Day is this Friday and to help celebrate save 25% in our rooms this month.";
    const sliderButtonLabel = "Our Rooms";
    
    return(    
        <main>
            <div className='container'>
                <Slider title={sliderTitle} description={sliderDescription} buttonLabel={sliderButtonLabel} buttonURL="/rooms" />
                <Section title="Services"> <Services/> </Section>
                <Section title="Contact"> </Section>
                <Section title="Subscribe"> </Section>
            </div>
        </main>);
}