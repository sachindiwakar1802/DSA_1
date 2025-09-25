function InsertionSort(arr){
  let n = arr.length;
  for(let i = 1;i<n; i++){
    let current = arr[i];
    let prev = i - 1;
  while(arr[prev]>current&&prev>=0){
    arr[prev+1] = arr[prev];
    prev --;
  }
arr[prev + 1] = current;

  }
  return arr;

}
let arr = [1,2,42,25,657,0]
let result = InsertionSort(arr);
console.log(result);