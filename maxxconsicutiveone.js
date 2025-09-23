function maxone(arr) {
  let count = 0;       // current streak of 1s
  let maxCount = 0;    // maximum streak found so far

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;                  // increase streak
      maxCount = Math.max(maxCount, count);
    } else {
      count = 0;                // reset streak if not 1
    }
  }
  return maxCount;
}

let arr = [1, 2, 3, 1, 1, 10];
console.log(maxone(arr)); // 👉 2
