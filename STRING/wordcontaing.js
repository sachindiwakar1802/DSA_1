var cheakword = function(words,x){
  let res =[];
  for(let i=0;i<words.length;i++){
    for(let j=0;j<words[i].length;j++){
      if(words[i] [j]==x){
        res.push(i);
        break;
      }
    }
  }
  return res;
}

let words = ["qwrr","jnvjfd","bvavsfvtdfe","gdcgsdgte"];
let x  = "v";

console.log(cheakword(words,x));
