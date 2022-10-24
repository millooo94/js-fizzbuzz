const eleSquares = document.querySelector('.squares')

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        eleSquares.innerHTML += `<div class="square">FIZZBUZZ</div>`;
        // let eleSquare = document.querySelectorAll('square')
        // eleSquare.style.backgroundColor = "yellow"

    } else if  (i % 5 == 0) {
        eleSquares.innerHTML += `<div class="square">BUZZ</div>`;


    } else if  (i % 3 === 0) {
        eleSquares.innerHTML += ` <div class="square">FIZZ</div>`;


    } else {
        eleSquares.innerHTML += `<div class="square">${i}</div>`;
 
    }

}
