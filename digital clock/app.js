function showTime(){
    var date = new Date();
    var s = date.getSeconds()
    var d = date.getMinutes()
    var sa = date.getHours()
    var gun = date.getDate().toString()
    var ay = date.getMonth()
    var yil = date.getFullYear()


    document.getElementsByClassName('second')[0].innerHTML =  s
    
    document.getElementsByClassName('minute')[0].innerHTML = d


    document.getElementsByClassName('hour')[0].innerHTML = sa


    document.getElementsByClassName('d')[0].innerHTML =   gun

    document.getElementsByClassName('m')[0].innerHTML = ay + 1

    document.getElementsByClassName('y')[0].innerHTML = yil

    

   

    



    
    setTimeout(showTime , 1000)
}

showTime()


