function findmissingno(arr,range){
  let num ;
  for(let i=0;i<range.length;i++){
    for(let j=0;j<range.length;j++){
      if(range[i]!==arr[j]){
         num = range[j]
      }
    }
    return num;
    }
  return -1;
}
let range = [1,2,35,6,78,9];
let arr = [1,2,35,6,78];
console.log(findmissingno(arr,range));