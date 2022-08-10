{
    const getMoveName = function (argMoveId) {

        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return `papier`
        } else if (argMoveId == 3) {
            return `nożyce`
        }

        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    const displayResult = function (argComputerMove, argPlayerMove) {

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
            printMessage(`nieznany ruch`)
        }

    }

    const playGame = function (argPlayerMove) {
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(randomNumber);
        const playerMove = getMoveName(argPlayerMove);

        console.log('Wylosowana liczba to: ' + computerMove);
        console.log('Gracz wpisał: ' + playerMove);

        clearMessages();
        displayResult(computerMove, playerMove);
    }

    document.getElementById(`play-rock`).addEventListener(`click`, function () { playGame(1) });
    document.getElementById(`play-paper`).addEventListener(`click`, function () { playGame(2) });
    document.getElementById(`play-scissors`).addEventListener(`click`, function () { playGame(3) });

}