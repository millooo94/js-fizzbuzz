const eleSquares = document.querySelector('.squares')





for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        eleSquares.innerHTML += `<div class="square red">FIZZBUZZ</div>`;


    } else if  (i % 5 == 0) {
        eleSquares.innerHTML += `<div class="square yellow">BUZZ</div>`;


    } else if  (i % 3 === 0) {
        eleSquares.innerHTML += ` <div class="square green">FIZZ</div>`;


    } else {
        eleSquares.innerHTML += `<div class="square blue">${i}</div>`;
 
    }
}

let red = document.querySelectorAll('.squares .square.red')
red.style.backgroundColor = 'red'



