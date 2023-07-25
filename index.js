
const container = document.querySelector('.container');
const select = document.querySelector('.select');
const blkBtn = document.querySelector(".black");
const ranBtn = document.querySelector(".random");
const resetBtn = document.querySelector(".reset");


function createGrid(num) {

    const container = document.querySelector('.container');
    //create rows & cols
    for (i = 0; i < num; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (j = 0; j < num; j++ ){
            let column = document.createElement("div")
            column.classList.add("column");
            row.appendChild(column);
        };
    };

};
createGrid(16);


function userAnswer () {

    //user input for how many divs will be created
    //limit the number of divs to 100 can cause delays

    let prompText = "enter a number 1-100";
    let userInput = prompt(prompText);
    if (userInput < 1 || userInput > 100) {
        alert("answer is out of range");
    } else {
        return userInput;
    };
};

//clear old grid to append new grid
function clearGrid(container) {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

//change div number
select.addEventListener('click', function () {
    let gridSize = document.querySelector(".gridSize");
    let num = userAnswer();

    gridSize.innerHTML = `${num} x ${num}`;
    clearGrid(container);
    createGrid(num);
});

//change color of div to black
blkBtn.addEventListener('click', function() {
    container.addEventListener('mouseover', function(e) {
        if (e.target = 'div'){
            e.target.style.backgroundColor = 'black';
        } else {
            e.target.style.backgroundColor = '';
        }
        console.log(this);
    });
    console.log(this);
});

//change the color of divs to any color
ranBtn.addEventListener("click",function() {
    // generate random color each div hover
    container.addEventListener('mouseover', function(e) {
        if(e.target = 'div') {
            e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        }else {
            e.target.style.backgroundColor = '';
        }
        console.log(this);
    })
    console.log(this);
});

//reset page to default styling
resetBtn.addEventListener("click",function() {
    clearGrid(container);
    createGrid(16);
    console.log(this);
});


