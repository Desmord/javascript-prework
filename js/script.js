function getMoveName(argMoveId) {

    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return `papier`
    } else if (argMoveId == 3) {
        return `nożye`
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
    if (argPlayerMove == argComputerMove) {
        printMessage(`remis`)
    } else if (argPlayerMove == `kamień` && argComputerMove == `papier`) {
        printMessage(`Wygrywa komputer`)
    } else if (argPlayerMove == `kamień` && argComputerMove == `nożyce`) {
        printMessage(`Ty wygrywasz`)
    } else if (argPlayerMove == `papier` && argComputerMove == `kamień`) {
        printMessage(`Ty wygrywasz`)
    } else if (argPlayerMove == `papier` && argComputerMove == `nożyce`) {
        printMessage(`Wygrywa komputer`)
    } else if (argPlayerMove == `nożyce` && argComputerMove == `papier`) {
        printMessage(`Ty wygrywasz`)
    } else if (argPlayerMove == `nożyce` && argComputerMove == `kamień`) {
        printMessage(`Wygrywa komputer`)
    } else {
        printMessage(`nieznany ruch gracza`)
    }
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
let computerMove = getMoveName(randomNumber);

printMessage('Twój ruch to: ' + playerMove);
printMessage('Ruch komputera to: ' + computerMove);

displayResult(computerMove, playerMove);
