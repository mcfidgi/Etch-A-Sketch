const container = document.querySelector('#container');
const button = document.querySelector(`#button`);
let squares = 4
// Next step: make it stay the same size as the screen. Look at the code for the other solutions to figure out how they make the grid stay the same size! Don't copy their code, learn what they did and then apply it to what you have already. Learn from how the good ones are doing it. Some of the really good ones actually look good enough to get them jobs.

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

container.style.cssText = `justify-content: center;`;
/*
function makeGrid(x) {
    for (i = 0; i < x; i++) {
        div = document.createElement(`div`);
        div.style.cssText = 'background: blue; flex: 0; display: flex; flex-direction: column; justify-content: center;';
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
*/

function makeGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const subDiv = document.createElement('div')
      subDiv.classList.add('grid-element')
      subDiv.textContent = `${size}`;
      //subDiv.addEventListener('mouseover', changeColor)
      //subDiv.addEventListener('mousedown', changeColor)
      container.appendChild(subDiv)
    }
};

/* These are the OLD Make Grid and Remove Grid. Feel free to use some of the stuff you've already written, but try using the CSS Grid layout module instead.
function makeGrid(x) {
    for (i = 0; i < x; i++) {
        div = document.createElement(`div`);
        div.style.cssText = 'background: blue; flex: 0; display: flex; flex-direction: column; justify-content: center;';
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
*/

function removeGrid(x) {
    for (i = 0; i < x; i++) {
            container.removeChild(document.querySelector(`.grid-element`));
    }
};

makeGrid(squares);