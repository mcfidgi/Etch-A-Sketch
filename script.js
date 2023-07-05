const container = document.querySelector('#container');

container.style.cssText = `display: flex; justify-content: space-around; flex: 1; flex-direction: row`;

for (i = 0; i < 4; i++) {
    div = document.createElement(`div`);
    div.style.cssText = 'background: blue; padding: 10px; flex: 0';
    div.setAttribute(`class`, `gridDiv gridDiv${i}`);
    div.textContent = `${i}`;
    container.appendChild(div);
    console.log(i);
};





