function search(arr,num){
  for(let i=0;i<arr.length;i++){
    if(arr[i] === num){
      return i;
    }
  }
  return -1;
}
let arr = [1,3,4,5,6,7,77,4];
let num = 4;
console.log(search(arr,num));
