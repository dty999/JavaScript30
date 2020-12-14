const video = document.querySelector('.player__video')
const toggle = document.querySelector('.toggle')
const player__buttons = [...document.querySelectorAll('.player__button')].filter(item=>item.getAttribute('data-skip'))
const ranges = document.querySelectorAll('[type="range"]')

function togglePlay(e){
    if(video.paused){
        video.play()
        toggle.innerHTML = '| |'
    }else{
        video.pause()
        toggle.innerHTML = '►'
    }
}

function skip(e) {
    video.currentTime += parseInt(this.dataset.skip)
}
function range(e){
    video[this.name] = this.value
}

video.addEventListener('click',togglePlay)
toggle.addEventListener('click',togglePlay)
for (const item of player__buttons) {
    item.addEventListener('click',skip)
}
for(item of ranges){
    item.addEventListener('change',range)
    item.addEventListener('mousemove',range)
}


