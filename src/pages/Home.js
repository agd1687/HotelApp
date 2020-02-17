import React from 'react';
import Slider from '../components/Slider';
import Section from '../components/Section';
import Services from '../components/Services';

export default function Home(){
    
    return(    
        <main>
            <div className='container'>
                <Slider infoType="rooms"/>
                <Section title="Services"> <Services/> </Section>
                <Section title="Contact"> </Section>
                <Section title="Subscribe"> </Section>
            </div>
        </main>);
}