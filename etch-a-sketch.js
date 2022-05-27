//select the container with "grid" class and set the grid size
const grid = document.querySelector('.grid');

//set grid size
const size = document.querySelector('#grid_size');
let grid_size =size.value;

//function to create a number of divs with "row" class equal to 
//the grid size and inside each row create an equal amount of 
//divs with "col" class
function set_grid(num) {

    for(let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add(i+1);
        grid.appendChild(row);

        for(let j = 0; j < num; j++) {
            const col = document.createElement('div');
            col.classList.add('col');
            col.classList.add(j+1);
            row.appendChild(col);
        };
    };
};

//function to link the "color" input to elements
function draw() {
    //attach event listener to .col divs to change color when 
    //moused over
    let sketch = document.querySelectorAll('.col');
    sketch.forEach((div) => {

        div.addEventListener('mousemove', function (e) {
            let color = document.querySelector('#color');
            e.target.style.background = color.value;
        });
    });
};

//initialize grid size and attach "color" input
set_grid(grid_size);
draw();

//listen for change in grid size and then reset the grid and 
//attach "color" input to newly created html elements
size.addEventListener('change', () => {
    grid_size = size.value;
    grid.innerHTML = '';

    set_grid(grid_size);
    draw();
});

