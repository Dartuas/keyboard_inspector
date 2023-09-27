// const showButtonDiv = document.querySelector('div');

// function keyPress(event) {
//     if (event.key.startsWith('F') || (event.key >= '1' && event.key <= '12')) {
//         event.preventDefault();
//     }
//     const keyCode = event.keyCode;
//     const keyName = event.key;
//     showButtonDiv.innerText = `${keyCode} ${keyName} `
// }

// document.addEventListener('keydown', keyPress);

const showButtonId = document.querySelector('.showId');
const showButtonName = document.querySelector('.spanText')
const showButtonPushDiv = document.querySelector('.showButton')

function keyPress(event) {
    if (event.key === 'F1') {
        event.preventDefault();
    }


 

    const keyCode = event.keyCode;
    const keyName = event.key === ' ' ? 'Spacebar' : event.key;
    showButtonName.innerText = `${keyName}`;
    showButtonId.innerText = ` ${keyCode}`;


}

// document.addEventListener('cliсk', keyPress);
document.addEventListener('keydown', (event) => {
    if (event.key) {
        showButtonPushDiv.className = "showButtonPush"
        keyPress(event);
    }
});
document.addEventListener('keyup', (event) => {
    if (event.key) {
        showButtonPushDiv.className = "showButton"
    }
});
