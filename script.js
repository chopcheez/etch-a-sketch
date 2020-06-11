const container = document.querySelector('.container');
const resetButton = document.getElementById('reset');

let boxNum;
let boxes;

function makeGrid(boxNum) {
    container.style.gridTemplateColumns = 'repeat(' + boxNum + ', 1fr)';
    for (let x = 0; x < boxNum; x++) {
        for (let y = 0; y < boxNum; y++) {
            const box = document.createElement('div');
            box.classList.add('box');
            container.appendChild(box);
            box.onmouseover = () => box.style.backgroundColor = 'black';
        }
    }
    boxes = document.querySelectorAll('.box');
}

makeGrid(16);

resetButton.onclick = function() {
    container.textContent = '';
    let boxNum = prompt('Please enter a number between 1-100 to make new grid.');
    while (boxNum < 1 || boxNum > 100 || isNaN(boxNum)) {
        boxNum = prompt('Number invalid. Please enter a number between 1-100.');
    }
    makeGrid(boxNum);
}