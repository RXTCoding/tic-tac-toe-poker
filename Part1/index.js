// const playerSpan= document.getElementById('player') <--- this variable needs to go inside of the fucntion because it needs to run and store data to be displayed later.

// function play(playerSpan.innerText){ <-- dont put a Node property inside the parameter (why dont we put anything in the parameter?)
//     if(playerSpan.innerText ==='X'){
//         return 'O' <---- dont use a return statement because nothing with display to the console and the code will stop running
//     }else{
//         return 'X'
//     }

// }



function play(idClicked){ 
    const playerSpan= document.getElementById('player');

    if(playerSpan.innerText ==='X'){
        playerSpan.innerText = 'O';
    } else {
        playerSpan.innerText= 'X'
    }
}

// function clickedElement(){
//     let idClicked= document.getElementById();
//     if(clickedElement.innerText === 'X'){
//         idClicked = 'X'
//     }else{
//         idClicked ='O'
//     }
// }

function play(idClicked){ 
    const playerSpan= document.getElementById('player');
    const clickedElement= document.getElementById(idClicked);
    if(playerSpan.innerText ==='X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
    } else {
        playerSpan.innerText= 'X'
        clickedElement.innerText = 'O'
    }
}


