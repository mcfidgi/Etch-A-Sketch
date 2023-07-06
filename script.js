const container = document.querySelector('#container');
const button = document.querySelector(`#button`);
let squares = 4
button.addEventListener('click', () => {
    newSquares = prompt(`How many squares do you want to be on each side?`);
    if (newSquares > 99) {
        alert('Not that many! Do less than 100!');
    } else {
        removeGrid(squares);
        squares = newSquares;
        makeGrid(squares);
    };
});

container.style.cssText = `display: flex; justify-content: space-around; flex: 1; flex-direction: row;`;

function makeGrid(x) {
    for (i = 0; i < x; i++) {
        div = document.createElement(`div`);
        div.style.cssText = 'background: blue; padding: 10px; flex: 0; display: flex; flex-direction: column; justify-content: space-around;';
        div.setAttribute(`class`, `gridDiv gridDiv${i}`);
        for (q = 0; q < x; q++) {
            subDiv = document.createElement('div');
            subDiv.setAttribute(`class`, `subDiv subDiv:hover`);
            subDiv.textContent = `${q}`;
            div.appendChild(subDiv);
        }
        container.appendChild(div);
    };
};

function removeGrid(x) {
    for (i = 0; i < x; i++) {
            container.removeChild(document.querySelector(`.gridDiv`));
    }
};

makeGrid(squares);




