let minutes = 0
let seconds = 0
let tens = 0
let interval;
let minutesValue = document.getElementById('minutes')
let secondsValue = document.getElementById('seconds')
let tensValue = document.getElementById('tens')
let playBtn = document.getElementById('play')
let pauseBtn = document.getElementById('pause')
let clearBtn = document.getElementById('clear')
let cam = document.getElementById('cam')
let main = document.getElementById('main')
let arr = [];


function removeClass() {
    main.classList.remove('fa-beat-fade')
    pauseBtn.classList.add('d-none')
    clearBtn.classList.add('d-none')
    cam.classList.add('d-none')
    playBtn.classList.add('d-none')
}

playBtn.addEventListener('click', function () {
    removeClass()
    pauseBtn.classList.remove('d-none')
    cam.classList.remove('d-none')
    interval = setInterval(function () {
        tens++
        if (tens <= 9) {
            tensValue.innerHTML = '0' + tens
        }
        if (tens > 9) {
            tensValue.innerHTML = tens
        }
        if (tens > 99) {
            seconds++
            secondsValue.innerHTML = '0' + seconds
            tens = 0
            tensValue.innerHTML = '0' + 0

        }
        if (seconds > 9) {
            secondsValue.innerHTML = seconds

        }
        if (seconds > 59) {
            minutes++
            minutesValue.innerHTML = '0' + minutes
            seconds = 0
            secondsValue.innerHTML = '0' + 0
        }
    }, 10)
})

pauseBtn.addEventListener('click', function () {
    removeClass()
    playBtn.classList.remove('d-none')
    clearBtn.classList.remove('d-none')
    main.classList.add('fa-beat-fade')
    clearInterval(interval)
})

clearBtn.addEventListener('click', function () {
    removeClass()
    playBtn.classList.remove('d-none')
    clearInterval(interval)
    arr = []
    document.getElementById('catch').innerHTML = arr
    minutes = '00'
    seconds = '00'
    tens = '00'
    minutesValue.innerHTML = minutes
    secondsValue.innerHTML = seconds
    tensValue.innerHTML = tens
})


cam.addEventListener('click', function () {
    let catchTimer = document.getElementById('main').innerText
    arr.unshift(catchTimer)
    display()
})

function display() {
    let container = ""
    for (let i = 0; i < arr.length; i++) {
        container += `
        <div class="alert text-center fs-4" role="alert">
                ${arr[i]}
               </div>
        `
    }
    document.getElementById('catch').innerHTML = container
}




