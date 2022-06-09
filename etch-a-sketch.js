//inputs are the location of where to place the grid and
//the size of the grid to be created.
function make_grid(loc, size) {

    for(let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add(i+1);
        loc.appendChild(row);

        for(let j = 0; j < size; j++) {
            const col = document.createElement('div');
            col.classList.add('col');
            col.classList.add(j+1);
            row.appendChild(col);
        };
    };
};


//function inputs are an array of elements and a color.
//the function attaches event listeners each div in the array of elements
//and fills the background with the color provided when moused over.
function draw(element_array, color_selection) {
    
    element_array.forEach((div) => {

        div.addEventListener('mouseenter', function (e) {
            color_value = color_selection.value;
            e.target.style.background = color_value;
        });
    });
};


//initialize grid location and grid size
const grid = document.querySelector('.grid');
const grid_size = document.querySelector('#grid_size');

//create grid and select elements to be colored
make_grid(grid, grid_size.value);
let selection = document.querySelectorAll('.col');

//select color input and enable draw function
const color_input = document.querySelector('#color');
//draw(selection, color_input);

//define button qureies
const custom_btn = document.querySelector('#custom');
const rainbow_btn = document.querySelector('#rainbow');
const eraser_btn = document.querySelector('#erase');
const reset_btn = document.querySelector('#reset');




//reinitialize grid when the size is changed
grid_size.addEventListener('change', () => {
    let size = grid_size.value;
    grid.innerHTML = '';

    make_grid(grid, size);
    let selection = document.querySelectorAll('.col');
});