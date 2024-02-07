// wpu Coding Challenge 2024
// 3/366
// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript


// <----- cara ke 1 ----->
// const rps = (p1, p2) =>  (p1 === p2) ? "Draw!" : ''|| (p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock") || (p1 === "rock" && p2 === "scissors") ? "Player 1 won!" : "Player 2 won!";

// <---- cara ke 2----->

const rps = (p1, p2) => {
    if (p1 === p2) {
        return "Draw!"
    }
    else if (
        (p1 === "scissors" && p2 === "paper") ||
        (p1 === "paper" && p2 === "rock") ||
        (p1 === "rock" && p2 === "scissors")) {
        return "Player 1 won!"
    }
    else {
        return "Player 2 won!"
    }
}


console.log(rps("scissors", "rock"));