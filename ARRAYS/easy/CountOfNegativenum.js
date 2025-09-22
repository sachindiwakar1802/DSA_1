function findNegativenumber(arr){
let count = 0;
for(let i = 0;i<arr.length;i++){
  if(arr[i]<0){
    count = count +1;
  }
}
return count ;
}

let arr = [1,3,4,-6,34,12,-6,12];
let result = findNegativenumber(arr);
console.log(result);
