// wpu Coding Challenge 2024
// 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

// <----- cara ke 1 ----->
// const grow = x => {
//     let result = x[0];
//     for( let i = 0; i < x.length; i++){
//         result *= x[i];
//     }
//     return result;
//   }


//<----- cara ke 2 ----->
// const grow = x => x.reduce((a, b) => a * b)

//<----- cara psikopat ----->
const grow =_=>_.reduce((__, ___) =>__*___)


console.log(grow([1,2,3,4,10]));
  