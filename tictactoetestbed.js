//first game 
const TicTacToe = {
    board: null,
    currentPlayer: 0,
    
   
    /**
     * Builds out the board in a [x,y] matrix (array of arrays)
     * @param {number} row - number of rows
     * @param {number} col - number of columns
     * @returns 
     */
    buildBoard(row, col) {
    
        let board = [];
    
        for(let x = 0; x< row; x++){
            //create a vertical row
            const row = [];
    
            //create a horizontal row
            for(let y = 0; y< col; y++ ){
                row.push("")
            }
    
            //add the row of 3 to the vertical board
            board.push(row);
            
        }
    
        return board;
    },


    /**
     * Starts a new game taking in players
     */
    newGame(){
        player1 = "Asha"; //prompt("Who is player 1");
        player2 = "Brandon" //prompt("who is player 2");
        this.restartGame();
    },

    /**
     * Places a piece for the current player
     * @param {number} x 
     * @param {number``} y 
     */
    doTurn(x,y){

        if(this.board[x][y] === '') {
            this.board[x][y] = (this.currentPlayer === 0) 
            ? 'x'
            : 'o';
          } else {
            console.log('try again!');
            return; 
          }

        console.log(this.board);

        this.currentPlayer = (this.currentPlayer === 0) 
            ? 1 
            : 0;

        console.log(`It is ${this.currentPlayer == 0 ? player1 : player2}'s turn`);

        this.checkWinCondition();
        //this.checkWinVertical(arr, idx, target, numOccurs);
        this.checkWinFwdDiag(); 
        this.checkWinRevDiag(); 
    },

    /**
     * Checks the board to determine if there is a winner.  If so, alert the winner.
     */

   
    checkWinCondition(){
        //homework   do not forget forEach method does not run on sparse indices.  if sparse idx btn 2 targets may not reset count as intended
        let xCount = 0;
        let oCount = 0; 
        const oTarget = 'o';
        const xTarget = 'x';
        let finalCount = 3; 
        let restartCount = 0;
        //HORIZONTAL CHECK*****//
        const hrnWinChk = this.board.forEach(row => {
            row.forEach(col => {
                (col === oTarget? oCount++ : col !== oTarget? oCount = restartCount: oCount = restartCount || col === xTarget ? xCount++ : 
                col !== xTarget? xCount = restartCount: xCount = restartCount); 
            })
            if(oCount === finalCount || xCount === finalCount) {
              console.log('3 in a row!'); 
              this.newGame();
            }
        })
    },

    //vertical check******
    checkWinVertical(arr, idx, target, numOccurs) {
        let count = 0; 
        arr.forEach(row => {
            (row[idx] === target) ? count++ : count = 0; 
        })  
        if(count === numOccurs) {
            console.log('3 in a row!'); 
            this.newGame(); 
        }
    },
    
    //Forward diagional******
    checkWinFwdDiag() {
        let xCounts = 0; 
        let oCounts = 0;
        let xTgt = 'x';
        let oTgt = 'o'; 
        const fowardDiag = this.board.forEach((e, i) => {
            (e[i] === xTgt ? xCounts++ : xCounts = 0 || e[i] === oTgt ? oCounts++ : oCounts = 0);
            if(xCounts === 3 || oCounts === 3) {
                console.log('3 in a row!');
                this.newGame();  
            }
        })
    },
            
    //reverse dig..array must be 2d  
    checkWinRevDiag() {
        let xxx = 0;
        let ooo = 0;
        let xTar = 'x';
        let oTar = 'o'; 
        let clone = [];
        this.board.map(row => {
            let outer = [];
            row.map(col => {
                outer.push(col); 
            })
            clone.push(outer);
        })
        const reverseDiag = clone.reverse().forEach((e, i) => {
            (e[i] === xTar ? xxx++ : xxx = 0 || e[i] === oTar ? ooo++ : ooo = 0); 
            if(xxx === 3 || ooo === 3) {
                console.log('3 in a row!');
                this.newGame();
            } 
        })
    },

    
     // Restart the game using current player
    restartGame(){
        this.board = this.buildBoard(3,3);
        console.log(this.board);
        console.log(`It is ${this.currentPlayer == 0 ? player1 : player2}'s turn`);
    }
}

//automatically start a new game
TicTacToe.newGame();

/*
TicTacToe.startGame();
TicTacToe.doTurn(0,0);
TicTacToe.doTurn(0,1);
*/



TicTacToe.checkWinCondition(); 

const odd = (num) => {
    if(num % 2 === 1) {
        return num; 
    } else {
        return even; 
    }
}