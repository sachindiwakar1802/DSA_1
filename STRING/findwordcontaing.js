var wordcontaing =function(word,x){
 let res = []; //
 for(let i = 0;i<word.length;i++){
  if(word[i].includes(x)){
    res.push(i);
  }
 }
 return res;
}
 let x = "r"; 
 let word = ["qqe","rt4e"];
 console.log(wordcontaing(word,x))