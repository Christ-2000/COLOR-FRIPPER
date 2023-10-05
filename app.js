// const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']


// const btn = document.getElementById("btn");
// const color = document.querySelector('.color');

// btn.addEventListener('click', function () {
//     const randomNumber = getRandomNumber()
//     document.body.style.backgroundColor = colors[randomNumber]
//     color.textContent = colors[randomNumber]

//     console.log(getRandomNumber())
// })

// function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length);
// }

function myDisplayer(something) {
    document.getElementById("demo").innerHTML = something;
    }
    
    function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
    }
    
    myCalculator(5, 5, myDisplayer);