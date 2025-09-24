function sum(num){
  if(num===0) return;
  let n = 0;
  n=(num)/2*(num+1);
  sum(num-1);
 return n;
};
console.log(sum(5));