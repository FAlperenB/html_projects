window.addEventListener('load' , ()=> {
    let long;
    let lat;
    
    let temperatureDescription = document.querySelector('.temperature-description')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTimezone = document.querySelector('.location-timezone')
    let iconz = document.querySelector('img')
    let ulke = document.querySelector('.ulke')
    let sehir = document.querySelector('.sehir')
    iconz.style.width = '1000px';

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            
            long = position.coords.longitude
            lat = position.coords.latitude
            
            //api gecersiz olabilir
             
            const api = `http://api.weatherapi.com/v1/current.json?key=767725e3974e4f58a1c204252233101&q=${lat},${long}&aqi=no`

            fetch(api).then(response =>{
                return response.json();
            }).then(data =>{
                

                const {temp_f , last_updated} = data.current

                const {text , icon} = data.current.condition

                const { country , name} = data.location
                //dom elementlerini api'daki bilgilere gore ayarla

                temperatureDegree.textContent = temp_f

                locationTimezone.textContent = last_updated
                
                iconz.src = `${icon}`

                temperatureDescription.innerText = text

                ulke.textContent = country
                sehir.innerText = name

            })
        })
    } 
})