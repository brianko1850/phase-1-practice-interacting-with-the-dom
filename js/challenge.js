const counter= document.querySelector('#counter')
const minus = document.querySelector("#minus")
const plus= document.querySelector("#plus")
const pause = document.querySelector("#pause")
const heart = document.querySelector('#heart')
let count =  0
let interval = -1

const counterRun = ()=> {
    
   if (interval == -1) {
    interval = setInterval(function(){count++;
        updateDisplay()
    
        }, 1000)
    pause.innerText = "pause"
    minus.disabled = false
       plus.disabled = false
       heart.disabled = false
   } else {
       clearInterval(interval)
       interval = -1
       pause.innerText = "resume"
       minus.disabled = true
       plus.disabled = true
       heart.disabled = true

   }
   
}

function updateDisplay() {
    counter.innerHTML = count
}

plus.addEventListener("click", () => {
    count++
    updateDisplay()
})

minus.addEventListener("click", ()=>{
    count--
    updateDisplay()
})

setTimeout(counterRun(), 1000)

function liker(){
    let p = document.createElement('p')
    document.querySelector('.likes').appendChild(p)
    p.textContent = `you liked ${counter.innerHTML}`
    
}

document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    handleComment(document.querySelector("#comment-input").value)
})
function handleComment(str) {
    let p = document.createElement('p')
    p.textContent = str
    document.querySelector("#comment-section").appendChild(p)
}
heart.addEventListener('click', liker)
pause.addEventListener("click", counterRun)