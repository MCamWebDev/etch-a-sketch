
const grid = document.querySelector('.grid');
let grid_size = 16;

for(let i = 0; i < grid_size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.classList.add(i+1);
    grid.appendChild(row);

    for(let j = 0; j < grid_size; j++) {
        const col = document.createElement('div');
        col.classList.add('col');
        col.classList.add(j+1);
        row.appendChild(col);
    }
}

const sketch = document.querySelectorAll('.col');



sketch.forEach((div) => {

    div.addEventListener('mousemove', function (e) {
        e.target.style.background = 'black';
    });
});