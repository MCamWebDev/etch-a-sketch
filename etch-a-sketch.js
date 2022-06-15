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


//function inputs are an array of elements.
//the function attaches event listeners each div in the array of elements
//and fills the background with a random color when moused over.
function rainbow(element_array) {
    
    element_array.forEach((div) => {

        div.addEventListener('mouseenter', function (e) {
            let brightness = 50;
            let color = (Math.ceil(360 * (Math.random())));
            e.target.style.background = `hsl(${color}, 100%, ${brightness}%)`;
        });
    });
};


//function to turn grid cells white or "erase" their color
function erase(element_array) {
    
    element_array.forEach((div) => {

        div.addEventListener('mouseenter', function (e) {
            let brightness = 100;
            let color = 360;
            e.target.style.background = `hsl(${color}, 100%, ${brightness}%)`;
        });
    });
};


//function to clear all grid elements
function reset(element_array, loc, ) {

    element_array.forEach((div) => {

        let brightness = 100;
        let color = 360;
        div.style.background = `hsl(${color}, 100%, ${brightness}%)`;
    });
};


//function to clear eventlisteners attached to html elements
function clear(element_array) {

    element_array.forEach((div) => {
        div.removeEventListener('mouseenter', function () {
        });
    });
};


//initialize grid location and grid size
const grid = document.querySelector('.grid');
const grid_size = document.querySelector('#grid_size');
const grid_size_display = document.querySelector('.grid_size')
grid_size_display.textContent = `${grid_size.value} x ${grid_size.value}`;

//create grid and select elements to be colored
make_grid(grid, grid_size.value);
let selection = document.querySelectorAll('.col');

//select color input and enable draw function
const color_input = document.querySelector('#color');

//define button qureies
const custom_btn = document.querySelector('.custom');
const rainbow_btn = document.querySelector('.rainbow');
const eraser_btn = document.querySelector('.erase');
const reset_btn = document.querySelector('.reset');



//reinitialize grid when the size is changed
grid_size.addEventListener('change', () => {
    let size = grid_size.value;
    grid.innerHTML = '';
    grid_size_display.textContent = `${size} x ${size}`;
    make_grid(grid, size);
    selection = document.querySelectorAll('.col');
});

//add event listener to the 'custom' button
custom_btn.addEventListener('click' , (e) => {
    e.preventDefault();
    clear(selection);
    draw(selection, color_input);
});

//add event listener to the 'rainbow' button
rainbow_btn.addEventListener('click' , (e) => {
    e.preventDefault();
    clear(selection);
    rainbow(selection);
});

//add event listener to the 'erase' button
eraser_btn.addEventListener('click' , (e) => {
    e.preventDefault();
    clear(selection);
    erase(selection);
});

//add event listener to the 'reset' button
reset_btn.addEventListener('click' , (e) => {
    e.preventDefault();
    clear(selection);
    reset(selection);
});


