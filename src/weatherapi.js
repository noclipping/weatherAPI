let getInfo = (city) => { 
    
    let link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb26cf51dc89b8cefda54030ebd28499&units=imperial`
    fetch(link, {mode: 'cors'})
    .then((r)=>{
        return r.json()
    })
    .then((r)=>{
        console.log(r);
    })
    }
export {getInfo}