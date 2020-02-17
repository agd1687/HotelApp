import React from 'react';

export const sliderData = {
    rooms:{title:'25% OFF!', description:'Valentine\'s Day is this Friday and to help celebrate save 25% in our rooms this month.', labelButton:'Our Rooms', urlButton:'/rooms'},
    services:{title:'Best Service!', description:'Here in Hotel Karlton we provide five starts services.', labelButton:'Our Services', urlButton:'/'}
};

export const SliderContext = React.createContext(sliderData.rooms);