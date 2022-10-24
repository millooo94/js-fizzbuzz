const eleSquares = document.querySelector('.squares')
const eleTitle = document.querySelector('h1');
const eleButton = document.querySelector ('button');



for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        eleSquares.innerHTML += `<div class="square fizzbuzz">FIZZBUZZ</div>`;


    } else if  (i % 5 == 0) {
        eleSquares.innerHTML += `<div class="square buzz">BUZZ</div>`;


    } else if  (i % 3 === 0) {
        eleSquares.innerHTML += ` <div class="square fizz">FIZZ</div>`;


    } else {
        eleSquares.innerHTML += `<div class="square blue">${i}</div>`;
 
    }
}


eleTitle.addEventListener('click', function (){
    eleButton.classList.toggle('hidden')
})

eleButton.addEventListener('click', function (){
    eleSquares.classList.toggle('hidden')
})

// let eleQuadrato = document.querySelectorAll('square')
// eleQuadrato.style.display = 'none'



