const form = document.getElementById("form")
const resultArea = document.getElementById("resultArea")
const attempt = document.getElementById("attempt")
const button = document.getElementById("restart")

restart.style.display = "none"
restart.onclick = () => {
    window.location.reload()
}
let count = 5

let guessNumber = Math.round(Math.random()*10)
console.log(guessNumber);

form.onsubmit = (e) => {
    e.preventDefault()
    let entry = e.target[0].value
    if(entry === "" || entry > 10 || entry < 1 ) {
        writeM("Please Enter a valid number")
         

    } else if ( guessNumber == entry) {
        setimg(true)
        writeM("You have won!")
    
    } else {
        count -= 1
        if(count <= 0) {
            setimg(false)
            writeM("You have lost")
        } else {
            
            writeM(`You had ${count} attempt`)
        }
    }
    form.reset()
}

const writeM = (msg) => (attempt.innerText = msg)


const setimg = (image) => {
    const img = document.createElement("img")
    img.style.width = "400px"
    img.style.height = "300px"
    if(image === true ){
        img.setAttribute("src" , "congratulations-congrats.gif")
        resultArea.prepend(img)
        restart.style.display = 'block'
        form.style.display = 'none'
    } else {
        img.setAttribute('src' , 'm-bison-game-over.gif')
        resultArea.prepend(img)
        restart.style.display = 'block'
        form.style.display = 'none'
    }
}