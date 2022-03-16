// let btn = document.querySelector(`.btn`)
// let pole = document.querySelector(`.pole`)
// let time = null
// function timer(){
//     if(pole.value!=0){
//       pole.value = parseInt(pole.value)-1
//     }
//     else{
//       btn.textContent='Клик)'
//     }
//   }
  
//   btn.addEventListener('click', function(){
//     if (btn.textContent == 'Клик)'){
//       time = setInterval(timer, 1000)
//       btn.textContent = 'Стоп'
//     }
//     else{
//       btn.textContent = 'Клик)'
//       clearInterval(time)
//     }
    
//   })


let pole = document.body.querySelector(".pole")
let p = document.body.querySelector(".p")
let word
pole.addEventListener('keyup', function() {
  clearTimeout(word)
word = setTimeout(function(){
  p.textContent = pole.value},1000)
})

