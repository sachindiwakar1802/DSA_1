var lastwordlength = function(s) {
  //trim all the spaces at the end
  let n = s.length-1;//we start from end if teh string 
  while(n>=0){
    if(s[n]===" "){
      --n;
    }else{
      break;
    }
  }
  // count charecter till you reach a space
  let count = 0;
  while(n>=0){
    if(s[n]!= " "){
      --n;
      ++count;
    }
    else{
      break;
    }
    }
    return count;
}
s = " "
console.log(lastwordlength(s))