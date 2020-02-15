import basic1 from './images/room-1.jpeg';
import basic2 from './images/room-2.jpeg';
import basic3 from './images/room-8.jpeg';
import family1 from './images/room-4.jpeg';
import family2 from './images/room-5.jpeg';
import family3 from './images/room-7.jpeg';
import premiun1 from './images/room-3.jpeg';
import premiun2 from './images/room-6.jpeg';
import premiun3 from './images/room-9.jpeg';
import luxury1 from './images/room-10.jpeg'
import luxury2 from './images/room-11.jpeg'
import luxury3 from './images/room-12.jpeg'
import presidential1 from './images/details-1.jpeg';
import presidential2 from './images/details-2.jpeg';
import presidential3 from './images/details-3.jpeg';
import presidential4 from './images/details-4.jpeg';


//OBJETO BASE PARA GENERACION DE DATOS
const dataRooms = {
    basic: {
        infoData:{label:"Basic Room", price: {min:70, max:100}, capacity: {min:1, max:2}, breakfast:false, pets:false, spa:false, minibar:false} ,
        visualData:{mainPhoto:"", photos:[basic1, basic2, basic3]}
    }, 
    family: {
        infoData:{label:"Family Room", price: {min:100, max:200}, capacity: {min:2, max:4}, breakfast:false, pets:false, spa:false, minibar:false} ,
        visualData:{mainPhoto:"", photos:[family1, family2, family3]}
    },
    premiun: {
        infoData:{label:"Premiun Room", price: {min:200, max:300}, capacity: {min:2, max:4}, breakfast:true, pets:true, spa:false, minibar:false} ,
        visualData:{mainPhoto:"", photos:[premiun1, premiun2, premiun3]}
    },
    luxury: {
        infoData:{label:"Luxury Room", price: {min:300, max:400}, capacity: {min:4, max:6}, breakfast:true, pets:true, spa:true, minibar:false} ,
        visualData:{mainPhoto:"", photos:[luxury1, luxury2, luxury3]}
    },
    presidential: {
        infoData:{label:"Presidential Room", price: {min:400, max:500}, capacity: {min:6, max:10}, breakfast:true, pets:true, spa:true, minibar:true} ,
        visualData:{mainPhoto:"", photos:[presidential1, presidential2, presidential3, presidential4]}
    }
    };

export default function dataGenerator(numReg){
    let arrayRegs = [];
    const roomTypes = Object.keys(dataRooms);

    for(let i=0; i<numReg; i++){
        const roomType = roomTypes[getRandomInt(0,roomTypes.length)];
        const newRoom = {
            infoData:{id:i+1, type:roomType, label:dataRooms[roomType]['infoData']['label'], price:getRoomPrice(roomType), capacity:getRoomCapacity(roomType), breakfast:getService(roomType,'breakfast'), pets:getService(roomType,'pets'), spa:getService(roomType,'spa'), minibar:getService(roomType,'minibar')},
            visualData:{mainPhoto:getPhoto(roomType), photos:dataRooms[roomType]['visualData']['photos']}
        };
        arrayRegs.push(newRoom);
    }

    //return JSON.stringify({arrayRegs});
    return arrayRegs;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  function getRandomBool(){
      return  Math.random() >= 0.5;
  }

  function getService(roomType, service){
      return dataRooms[roomType]['infoData'][service] ? true : getRandomBool();
  }

  function getRoomPrice(roomType){
    return getRandomInt(dataRooms[roomType]['infoData']['price']['min'], dataRooms[roomType]['infoData']['price']['max']);
  }

  function getRoomCapacity(roomType){
    return getRandomInt(dataRooms[roomType]['infoData']['capacity']['min'], dataRooms[roomType]['infoData']['capacity']['max']+1);
  }

  function getPhoto(roomType){
    const photos = dataRooms[roomType]['visualData']['photos'];
    return photos[getRandomInt(0, photos.length)];
  }