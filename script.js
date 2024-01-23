let startbox = document.querySelector('.start-box')
let inputcounter = document.querySelector('#input-counter')
let startcounter = document.querySelector('#start-counter') 
let errorelement = document.querySelector('#error-massage')
let timercircle = document.querySelector('.c100') 
let timernum = document.querySelector('.c100 > span')
let successMessage = document.querySelector('.success')
let loadingMessage = document.querySelector('.loading')

startcounter.addEventListener( 'click' , function(e){
    let seconds = parseInt(inputcounter.value)

    if (isNaN(seconds)) {
      alert( "زمان را به درستی وارد کنید");
        return;
}

errorelement.classList.remove('active')
timercircle.style.display = 'block'
timernum.textContent =seconds;
startbox.style.display= 'none'
loadingMessage.style.display= 'block'
successMessage.style.display='none'



let originsec=seconds
let lastpercent =''
let timeid=setInterval(() => {
    if(lastpercent)timercircle.classList.remove(lastpercent)
    
    if(seconds <=0){
        clearInterval(timeid) 
        startbox.classList.add('active');
        timercircle.style.display = 'none'
        inputcounter.value=''
        startbox.style.display= 'block'
        loadingMessage.style.display= 'none'
        successMessage.style.display='block'
        return;
    }
    
    seconds-=1;
    let percent =((originsec-seconds)/originsec)*100
    lastpercent=`p${percent}`
    timercircle.classList.add(`p${percent}`)
    console.log(percent)
    timernum.textContent=seconds
}, 1000);

})
