const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){

  let hexColor = '#';
  for(i = 0; i < 6; i++){
    let random = Math.floor(Math.random()*hex.length)
    hexColor += hex[random]
  }
  document.body.style.backgroundColor = hexColor;
  color.innerText = hexColor;
})

// Math.random produces decimal numbers from 0-1
// Math.random * hex.length produces decimal numbers from 0-16
// When we Math.floor the above expression, the decimal numbers becomes integers
// DONE!
