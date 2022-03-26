'use strict'

var gBoard;

var gLevel = {
    SIZE: 4,
    MINES: 2
}

var minePos = {
    i: createBoard(gBoard, minePos.i, minePos.j),
    j: createBoard(gBoard, minePos.i, minePos.j)

}



function initGame() {


    var gBoard = createBoard();
    gBoard = populateMines(gBoard);
    renderBoard(gBoard);

}


function createBoard() {

    var board = [];
    for (var i = 0; i < gLevel.SIZE; i++) {
        board[i] = [];
        for (var j = 0; j < gLevel.SIZE; j++) {
            var cell = {

                minesAroundCount: 0,
                isShown: true,
                isMine: false,
                isMarked: false

            }
            board[i][j] = cell;
        }
    }

    console.table(board);
    return board


}







function populateMines(board) {


    for (var m = 0; m < gLevel.MINES; m++) {
        var i
        var j
        i = Math.floor(Math.random() * (gLevel.SIZE - 1));
        j = Math.floor(Math.random() * (gLevel.SIZE - 1));
        console.log(i);
        console.log(j);

        if (board[i][j].isMine === false) {
            board[i][j].isMine = true;

        }
        console.log('m', m);


    }


    return board
}

function renderBoard(board) {
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {

        strHtml += '<tr>';
        for (var j = 0; j < board.length; j++) {

            var cell = board[i][j];
            if (cell.isShown) {

            }

            strHtml += '<td></td>'


        }
        strHtml += '</tr>';
    }

    var elMat = document.querySelector('.game-board');
    elMat.innerHTML = strHtml;
    console.table(strHtml);

}


function setMinesNegsCount(board, cellI, cellJ) {

    var negsCount = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= board[i].length) continue;

            
        }
    }
    console.log(negsCount);
    return negsCount;




}


