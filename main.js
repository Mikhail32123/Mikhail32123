//Элементы формы
const squareInput = document.querySelector('#square-input')
const squareRange = document.querySelector('#square-range')
const inputs = document.querySelectorAll('input')
// радио кнопки
const radioType= document.querySelectorAll('input[name = "type"]')
const radioBuilding = document.querySelectorAll('input[name="building"]')
const radioRooms= document.querySelectorAll('input[name = "rooms"]')
// checkbox
const ceilings = document.querySelector('input[name="ceiling"]')
const walls = document.querySelector('input[name="walls"]')
const floor = document.querySelector('input[name="floor"]')

const basePrice = 3000;
const totalPriceElement = document.querySelector('#total-price')

squareRange.addEventListener('input',function(){
squareInput.value = squareRange.value;
})

let totalPrice = basePrice * parseInt(squareInput.value);
console.log(totalPrice)



function calculate(){
    let totalPrice = basePrice * parseInt(squareInput.value);
    console.log(totalPrice);

   for (const radio of radioType){
       if (radio.checked ){
       totalPrice = totalPrice * parseFloat(radio.value);
       }
   }


   for (const radio of radioBuilding){
    if (radio.checked ){
    totalPrice = totalPrice * parseFloat(radio.value);
    }
}

for (const radio of radioRooms){
    if (radio.checked ){
    totalPrice = totalPrice * parseFloat(radio.value);
    }
}
if (ceilings.checked){
    totalPrice = totalPrice * parseFloat(ceilings.value);
}

if (walls.checked){
    totalPrice = totalPrice * parseFloat(walls.value);
}
if (floor.checked){
    totalPrice = totalPrice * parseFloat(floor.value);
}



    const formater = new Intl.NumberFormat('ru');
    totalPriceElement.innerText = formater.format(totalPrice);
}


calculate();

for (const input of inputs) {
    input.addEventListener('input',function(){
    calculate()
  })  
}
