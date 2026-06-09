const symbols = [
    "♥",
    "♦",
    "♠",
    "♣",
    "A",
    "K",
    "Q",
    "J",
    "💰"
];

let balance = 1000;
let bet = 10;

const rows = 4;
const cols = 5;

function createBoard(){

    const board = document.getElementById("board");

    board.innerHTML = "";

    for(let i=0;i<rows*cols;i++){

        let div = document.createElement("div");

        div.className = "cell";

        div.innerHTML = "❔";

        board.appendChild(div);
    }
}

createBoard();

function randomSymbol(){

    return symbols[
        Math.floor(Math.random() * symbols.length)
    ];
}

function spin(){

    if(balance < bet){

        alert("Not enough balance");
        return;
    }

    balance -= bet;

    document.getElementById("balance").innerHTML = balance;

    const cells = document.querySelectorAll(".cell");

    let scatterCount = 0;

    let all = [];

    cells.forEach(cell=>{

        let symbol = randomSymbol();

        cell.className = "cell";

        if(symbol === "💰"){

            cell.classList.add("scatter");
            scatterCount++;
        }

        cell.innerHTML = symbol;

        all.push(symbol);
    });

    let msg = "No Win 😢";

    let multiplier = 1;

    if(scatterCount >= 3){

        multiplier = 5;

        let win = bet * multiplier;

        balance += win;

        msg = "🔥 SCATTER BONUS +" + win;
    }

    else{

        let counts = {};

        all.forEach(s=>{

            counts[s] = (counts[s] || 0) + 1;
        });

        for(let key in counts){

            if(counts[key] >= 4){

                multiplier = 2;

                let win = bet * multiplier;

                balance += win;

                msg = "✨ WIN +" + win;
            }

            if(counts[key] >= 6){

                multiplier = 5;

                let win = bet * multiplier;

                balance += win;

                msg = "🎉 BIG WIN +" + win;
            }
        }
    }

    document.getElementById("multi").innerHTML =
        "x" + multiplier;

    document.getElementById("balance").innerHTML =
        balance;

    document.getElementById("message").innerHTML =
        msg;
}

function plusBet(){

    bet += 10;

    document.getElementById("betText").innerHTML =
        bet;
}

function minusBet(){

    if(bet > 10){

        bet -= 10;
    }

    document.getElementById("betText").innerHTML =
        bet;
}
