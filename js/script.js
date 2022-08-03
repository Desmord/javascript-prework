let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = `nieznany ruch`;
let playerMove = 'nieznany ruch';

console.log('Wylosowana liczba to: ' + randomNumber);
console.log('Gracz wpisał: ' + playerInput);


if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerMove == `2`) {
    playerMove = `papier`;
} else {
    playerMove = `nożyce`;
}

if (randomNumber == `1`) {
    computerMove = `kamień`
} else if (randomNumber == `2`) {
    computerMove = `papier`
} else {
    computerMove = `nożyce`
}

printMessage('Twój ruch to: ' + playerMove);
printMessage('Ruch komputera to: ' + computerMove);

if (playerMove == computerMove) {
    printMessage(`remis`)
} else if (playerMove == `kamień` && computerMove == `papier`) {
    printMessage(`Wygrywa komputer`)
} else if (playerMove == `kamień` && computerMove == `nożyce`) {
    printMessage(`Ty wygrywasz`)
} else if (playerMove == `papier` && computerMove == `kamień`) {
    printMessage(`Ty wygrywasz`)
} else if (playerMove == `papier` && computerMove == `nożyce`) {
    printMessage(`Wygrywa komputer`)
} else if (playerMove == `nożyce` && computerMove == `papier`) {
    printMessage(`Ty wygrywasz`)
} else if (playerMove == `nożyce` && computerMove == `kamień`) {
    printMessage(`Wygrywa komputer`)
} else {
    printMessage(`nieznany ruch gracza`)
}


