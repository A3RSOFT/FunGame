let coins = 1000;

const symbols = [
    "🍒",
    "🍋",
    "💎",
    "7️⃣",
    "⭐",
    "🔥"
];

function randomSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spin(){

    let bet = parseInt(document.getElementById("bet").value);

    if(bet <= 0){
        alert("Invalid bet");
        return;
    }

    if(bet > coins){
        alert("Not enough coins");
        return;
    }

    coins -= bet;

    let s1 = randomSymbol();
    let s2 = randomSymbol();
    let s3 = randomSymbol();

    document.getElementById("slot1").innerHTML = s1;
    document.getElementById("slot2").innerHTML = s2;
    document.getElementById("slot3").innerHTML = s3;

    let msg = "😢 You lost";

    // JACKPOT
    if(s1 === s2 && s2 === s3){

        let win = bet * 10;

        coins += win;

        msg = "🎉 JACKPOT! +" + win;
    }

    // DOUBLE
    else if(s1 === s2 || s2 === s3 || s1 === s3){

        let win = bet * 2;

        coins += win;

        msg = "✨ Small Win +" + win;
    }

    // SCATTER BONUS
    if(s1 === "⭐" && s2 === "⭐" && s3 === "⭐"){

        let bonus = bet * 20;

        coins += bonus;

        msg = "🔥 SCATTER BONUS +" + bonus;
    }

    document.getElementById("coins").innerHTML = coins;
    document.getElementById("message").innerHTML = msg;
}
