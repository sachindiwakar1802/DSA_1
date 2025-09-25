function bubbleSort(arr){
  let n = arr.length;
  let swapped ;
  for(let i=0;i<n;i++){
    swapped = false;
    for(let j =0; j<n-i-1;j++){
      if(arr[j]>arr[j+1]){
        //swap
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];

        swapped = true;
      }
    }

  }
return arr;
}

let arr  = [1,2,4245,231,32313,908];
console.log(bubbleSort(arr));