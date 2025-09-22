function checkpalindrome(n){
      let num = n;
      let result = ""
      let res  =0;
       while(n>0){

         res = n%10; 
           result =result+ res;
        n = Math.floor(n/10);
       
      
       }
       if(result===num.toString()){
        return "palindrome"
       }
       else{
         return "not palindrome"
       }
}

console.log(checkpalindrome(121));
