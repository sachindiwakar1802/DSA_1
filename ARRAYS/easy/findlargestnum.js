function findlargest(arr){
  let max = arr[0]
  for(let i=0;i<arr.length;i++){
      if(arr[i]>max){
        max = arr[i];
      }  
  }
  return max;
}

let arr = [1,3,4,5,7,8,5,3,123,4];

let result = findlargest(arr);

console.log(result);
