function zeroShift(arr) {
  let newArray = [];
  let count = 0;

 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] ^ 0) {  
      newArray.push(arr[i]);
    } else {
      count++; 
    }
  }

 
  for (let i = 0; i < count; i++) {
    newArray.push(0);
  }

  return newArray;
}

let arr = [1, 0, 3, 0, 56, 0, 9];
console.log(zeroShift(arr)); 
