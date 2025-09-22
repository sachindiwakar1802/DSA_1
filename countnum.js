function count(n){

      let count  = 0;
      while(n>0){
        n = Math.floor(n/10);
        count = count +1;
      }
 
      return count;
}
console.log(count(122))