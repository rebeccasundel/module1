// ************************************************************************************
// https://www.codewars.com/kata/moving-zeros-to-the-end/javascript
// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
// ************************************************************************************

function moveZeros(arr) {
  const result = [];
  const zeros = [];

  for (let i in arr) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return result.concat(zeros);
  // merging 2 arrays using the spread operator
  // return [...result, ...zeros];
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
// [ false, 1, 1, 2, 1, 3, 'a', 0, 0 ]
