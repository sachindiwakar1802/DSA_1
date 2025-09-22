function leftShift(arr,k){
        let newArray = [];
        if(arr.length===0) return 
        k = k%(arr.length)
        for(let i=k; i<arr.length; i++){
            newArray.push(arr[i])  
        }
         for(let i=0; i<k; i++){
            newArray.push(arr[i])  
        }
        return newArray
}
let k = 3;
let arr = [1,3,4,57,78,4,5]
console.log(leftShift(arr,k));