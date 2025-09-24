function linearsearch(arr,target){
  for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
      return [i,a[arr[i]]];
    }
  }
  return -1;
}
let target = 7;
let arr = [1,2,34,5,6,7,2];

console.log(arr,target);