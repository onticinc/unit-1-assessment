console.log('[main.j is working');

// onload set input value. 
window.onload = function () {
    document.querySelector(".input").value = 1;
}

const PLUS_BUTTON = document.querySelector('.plus');
const MINUS_BUTTON = document.querySelector('.minus');
const INPUT = document.querySelector('.input');



let topNumber = document.querySelector('.top_number');
let inputNumber = 1;
let adjustedNumber = 0;


// update top number to screen. 

// 

function addValue() {

    PLUS_BUTTON.addEventListener("click", function (event) {


    })

};

function minusValue() {

    MINUS_BUTTON.addEventListener("click", function (event) {

        adjustedNumber = adjustedNumber - inputNumber;

    })

};



// is moved over a different list item
PLUS_BUTTON.addEventListener("mouseover", function (event) {
    // change plus button color. 
    event.target.style.color = "orange";

    // reset the color after a short delay. Need to figure out how to stay selected while hovering. 
    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);


// I am tired and need sleep. I could keep playing but I have reached the time limit. 
