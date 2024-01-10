let size = 16;
const container = document.querySelector('.container');
for (let i = 0; i < size; i++){
    // Creates row
    const row = document.createElement('div');
    row.classList.add('row');
    // Adds boxes to row
    for (let j = 0; j < size; j++){
        const box = document.createElement('div');
        box.classList.add('box');
        row.appendChild(box);
    }

    // Adds row to container
    container.appendChild(row);
}

container.addEventListener('mouseover', (e) => {
    let element = e.target;
    const selectedClass = element.classList[0];

    switch(selectedClass){
        case 'box':
            element.style.cssText = 'background-color: black;';
            break;
        // default:
        //     alert(selectedClass);
        //     break;
    }
});

// removes children
// while(container.firstChild){
//     container.removeChild(container.firstChild);
// }