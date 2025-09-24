function BinarySearch(num,target){
  let left = 0;
  let right = num.length-1;
 
  while(right>=left){
 let middle=Math.floor(left+right)/2;
  if(target===num[middle]){
    return num[middle];
  }
else if(num[middle]>target){
  right = middle - 1
}
else if(num[middle]<target){
  left = middle +1;
}
  }

  return -1;
}

let num = [1,2,4,46,7,8,9];
let target = 4;

console.log(BinarySearch(num,target));