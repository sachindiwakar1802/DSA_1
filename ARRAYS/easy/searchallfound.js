function search(arr, num) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      result.push(i);  // store index
    }
  }
  return result.length > 0 ? result : -1; 
}

let arr = [1, 3, 4, 5, 6, 7, 77, 4];
let num = 4;
console.log(search(arr, num)); 
