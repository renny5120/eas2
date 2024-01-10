let size = 16;
const container = document.querySelector('.container');

function createBoxes(){
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
}

function deleteBoxes(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
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

let buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (e) => {
    let element = e.target;
    const selectedClass = element.classList[0];

    switch(selectedClass){
        case 'resize':
            let input = prompt("How much to resize?");

            if (input <= 0 || isNaN(input)){
                alert("Invalid Input");
                break;
            }

            size = input;
            deleteBoxes();
            createBoxes();

            break;
        case 'reset':
            deleteBoxes();
            createBoxes();
            break;
        default:
            // alert(selectedClass);
            break;

    }
});

// creates default grid
createBoxes();


