let stack = []
//finding the top and the last value iun the stack as tehj rule of the stach thej top value will be the value which we enter at the last 
stack.push(1)
stack.push(3)
stack.push(3)
stack.push(10)

console.log(stack.pop());
let top = stack[stack.length-1];
console.log(top);