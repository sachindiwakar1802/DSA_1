function SelectionSort(arr){
         for(let i = 0;i<arr.length -1;i++){
          let min  = i;
             for(let j = i+1;j<arr.length;j++){
                 if(arr[j]<arr[min]){
                    min  = j;
                 };
             };
              [arr[i], arr[min]] = [arr[min], arr[i]];

            };
                         
            return arr;
}
let arr = [34,0,9,0,56];
console.log(SelectionSort(arr));