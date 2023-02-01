window.addEventListener('load' , ()=> {
    let long;
    let lat;
    
    let temperatureDescription = document.querySelector('.temperature-description')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTimezone = document.querySelector('.location-timezone')
    let iconz = document.querySelector('img')
    let ulke = document.querySelector('.ulke')
    let sehir = document.querySelector('.sehir')
    iconz.style.width = '200px';


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            
            long = position.coords.longitude
            lat = position.coords.latitude
            
            //api gecersiz olabilir
             
            const api = `http://api.weatherapi.com/v1/current.json?key=767725e3974e4f58a1c204252233101&q=${lat},${long}&aqi=no`

            fetch(api).then(response =>{
                return response.json();
            }).then(data =>{
                

                const {temp_f , last_updated , temp_c} = data.current

                const {text , icon} = data.current.condition

                const { country , name} = data.location
                //dom elementlerini api'daki bilgilere gore ayarla

                temperatureDegree.textContent = temp_f

                
                
                iconz.src = `${icon}`

                temperatureDescription.innerText = text

                ulke.textContent = country
                sehir.innerText = name

                const deger = document.querySelector('.birim')

                const degree = document.querySelector('.degree-section')

degree.onclick = (e) => {

    if(e.target.innerText == temp_f){
        temperatureDegree.textContent = temp_c
        deger.innerText = 'C'
    } else if (e.target.innerText == temp_c) {
        temperatureDegree.textContent = temp_f
        deger.innerText = 'F'   
    }

    
}



            })
        })
    } 
})



