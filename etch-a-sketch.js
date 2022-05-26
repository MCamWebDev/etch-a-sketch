//select the container with "grid" class and set
const grid = document.querySelector('.grid');

//set grid size
let grid_size = 16;

//create a number of divs with "row" class equal to the grid size and inside each row 
//create an equal amount of divs with "col" class
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

//attach event listener to .col divs to change color when moused over
const sketch = document.querySelectorAll('.col');

sketch.forEach((div) => {

    div.addEventListener('mousemove', function (e) {
        e.target.style.background = 'black';
    });
});