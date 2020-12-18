
const showTimeArea = document.querySelector(".display__time-left")
const showEndTimeArea = document.querySelector('.display__end-time')
const inputTime = document.customForm

let timerId = null
function timer(minsec) {
    clearInterval(timerId)
    const startTime = new Date().getTime()
    const endTime = startTime+minsec
    showTime(minsec/1000)
    showEndTime(new Date(endTime))
    timerId = setInterval(()=>{
        const curTime = new Date().getTime()
        let sec = Math.round((endTime-curTime)/1000)
        if(sec<0){
            //结束计时
            clearInterval(timerId)
            
        }else{
            showTime(sec)
        }

    },1000)
}

function showTime(sec) {
    const min = parseInt(sec/60)
    const secLeft = sec%60
    showTimeArea.textContent = `${min}:${secLeft<10?'0':''}${secLeft}`
}
function showEndTime(endDate) {
    let min = endDate.getMinutes()
    let hour = endDate.getHours()
    showEndTimeArea.textContent = `在 ${hour}:${min<10?'0':''}${min} 结束`

}

function setTimer(e) {
    e.preventDefault()
    timer(this.minutes.value*60000)
}

inputTime.addEventListener('submit',setTimer)