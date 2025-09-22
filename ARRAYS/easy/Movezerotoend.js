function zeroShift(arr) {
  let newArray = [];
  let count = 0;

  // First loop: push non-zero elements and count zeros
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] ^ 0) {  // non-zero numbers
      newArray.push(arr[i]);
    } else {
      count++; // count zeros
    }
  }

  // After the loop: push zeros at the end
  for (let i = 0; i < count; i++) {
    newArray.push(0);
  }

  return newArray;
}

let arr = [1, 0, 3, 0, 56, 0, 9];
console.log(zeroShift(arr)); // [1, 3, 56, 9, 0, 0, 0]
