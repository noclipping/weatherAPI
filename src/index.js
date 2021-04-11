import {getInfo, pullData} from './weatherapi';
import {render} from './dom';
import {weatherAPI} from './objcts'


weatherAPI.json('honesdale').then((v)=>console.log(v))

//pullData();
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=fb26cf51dc89b8cefda54030ebd28499
