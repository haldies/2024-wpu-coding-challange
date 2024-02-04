// const sumArray=(arr) =>{
//     // Input validation
//     if (!arr || !Array.isArray(arr) || arr.length <= 1) {
//         return 0;
//     }

//     // Find the minimum and maximum values in the array
//     const minValue = Math.min(...arr);
//     const maxValue = Math.max(...arr);

//     // Calculate the sum excluding the minimum and maximum values
//     const sum = arr.reduce((acc, num) => acc + num, 0) - minValue - maxValue;
//     return sum;
// }
// const sumArray = arr => !arr || arr.length <= 1 ? 0 : arr.reduce((acc, num) => acc + num, 0) - Math.min(...arr) - Math.max(...arr);

const sumArray=_=>!_ || _.length<=1?0:_.reduce((__,___)=>__+___,0)-Math.min(..._)-Math.max(..._);


console.log(sumArray([ 6, 2, 1, 8, 10 ]))