function rev(arr) {
  let newarray = [];   // initialize as array
  for (let i = 0; i < arr.length; i++) {
    newarray.push(arr[arr.length - 1 - i]); // use -1
  }
  return newarray;
}

let arr = [1, 5];
console.log(rev(arr)); // [5, 1]
