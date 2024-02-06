// wpu Coding Challenge 2024
// 3/366
// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript


// <----- cara ke 1 ----->
const rps = (p1, p2) => {
    const getMsg = ["Player 1 won!", "Player 2 won!", "Draw!"];
    if (p1 === p2) {
        return getMsg[2];
    } return (p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock") || (p1 === "rock" && p2 === "scissors") ? getMsg[0] : getMsg[1];
    
};


console.log(rps("rock", "rock"));