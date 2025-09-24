function fact(num){
  let n = 0;
  //base condition
  if(num===0) return 1;
  //main condition
  n = num*(num-1);
  return n;
}

console.log(fact(6));