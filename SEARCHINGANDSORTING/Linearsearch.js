function linearSearch(arr,target){

  for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
      return [i,arr[i]]
    }
  
  }
 return -1;
}
let arr = [1,3,4,5,67,8];
let target= 8;
console.log(linearSearch(arr,target));
