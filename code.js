
 let button = document.querySelector(`.button`);
//   button.onclick = function() {
//     alert('Привет мир!');
//   };

button.addEventListener(`click`, function print () {
        alert("Привет мир!");
      });
//   
      
let button2 = document.querySelector(`.button2`);
button2.addEventListener(`click`, function printEmail () {
    let input = document.querySelector(`.input`)
    input.value = "test@email"
});

let button3 = document.querySelector(`.button3`);
button3.addEventListener(`click`, function () {
    let input2 = document.querySelector(`.input2`)
    let a = input2.value
    alert(`Вы ввели < ${a}>` )
});

let button4 = document.querySelector(`.button4`);
button4.addEventListener(`click`, function () {
    let pole1 = document.querySelector(`.pole1`)
    let pole2 = document.querySelector(`.pole2`)
    let val1 = pole1.value
    pole1.value = pole2.value
    pole2.value = val1
});

let block = document.querySelector(`.block`)
block.addEventListener(`click` , function() {
    let pole = document.querySelector(`.pole`)
    pole.disabled = true
})
let unblock = document.querySelector(`.unblock`)
unblock.addEventListener(`click` , function() {
    let pole = document.querySelector(`.pole`)
    pole.disabled = false
})

let btn = document.querySelector(`.btn`)
btn.addEventListener(`click`, function(){
    let box = document.querySelector(`.box`)
    if(box.hidden == true) {
        box.hidden = false, btn.textContent = "скрыть квадрат"}
    else {
        box.hidden = true, btn.textContent = "показать квадрат"}
})

let box1 = document.querySelector(`.box1`)
box1.addEventListener('mouseover',function() {
    box1.style.backgroundColor = "green"})
box1.addEventListener('mouseout',function() 
{box1.style.backgroundColor = "red"})
