document.addEventListener('DOMContentLoaded', () => {
    const squareRow = document.querySelector('.square-row');
    const circleRow = document.querySelector('.circle-row');

    // Set up event listener for circles and give them labels
    const setupCircleListener = (circle, color) => {
        const label = document.createElement('p');

        // create some labels and append
        label.classList.add('label');
        label.innerHTML = color;
        circle.appendChild(label);

        // set our eventlistener to create a square once clicked
        circle.addEventListener('click', () => createSquare(color, circle));
    }

    // Set an event listener for each existing circle, especially circles "created" from squares 
    const circles = document.querySelectorAll('.circle');


    circles.forEach(circle => {
        const color = circle.classList[1];
        setupCircleListener(circle, color);
    });

    // create square once a circle is clicked
    function createSquare(color, circle) {
        const square = document.createElement('div');
        const label = document.createElement('p');
        
        // create labels and append
        label.classList.add('label');
        label.innerHTML = color;
        square.appendChild(label);
        square.classList.add('square', color);
        squareRow.appendChild(square);

        // set eventlistener to create circle from square 
        square.addEventListener('click', () => moveCircleToTop(color, square));
        // remove the clicked circle
        circle.remove();
    }


    // create a circle once a circle is clicked
    function moveCircleToTop(color, square) {
        // Create a new circle with the same color
        const newCircle = document.createElement('div');
        let classesToAdd = [ 'circle', 'col-lg-2' ];
        // add some classes to the newly created circle
        newCircle.classList.add( ...classesToAdd, color);

        // Set up event listener for the new circle
        setupCircleListener(newCircle, color);

        // Insert the new circle at the beginning of the row
        circleRow.insertBefore(newCircle, circleRow.firstChild);

        // Remove the clicked square
        square.remove();
    }
});
