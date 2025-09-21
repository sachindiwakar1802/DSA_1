function find(arr){
  let k = 0;
  let newarray = [];

  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] !== arr[i+1]){
      newarray.push(arr[i]);
    } else {
      k++;
    }
  }

  if(arr.length > 0){
    newarray.push(arr[arr.length - 1]);
  }

  return { duplicateCount: k, uniqueArray: newarray };
}

let arr = [13,64,34,4,4,5];
console.log(find(arr));
