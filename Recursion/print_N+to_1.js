function printnum(num){
         if(num===0) return;
         console.log(num);
         printnum(num - 1);
}
printnum(10);