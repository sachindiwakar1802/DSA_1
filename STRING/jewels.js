var checkjewels = function(jewels,stones){
    let count = 0;
    for(let i=0;i<stones.length;i++){
      for(let j=0;j<jewels.length;j++){
        if(jewels[j]===stones[i]){
          count++;
          break;
        }
      }
    }
    return count;
}

let jewels = "aab";
let stones = "aAAbbba";
console.log(checkjewels(jewels,stones));