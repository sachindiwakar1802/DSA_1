mystack = function() {
  this.q1 = [];
  this.q2 = [];
}

// push operation
mystack.prototype.push = function(x) {
  this.q1.push(x);
}

// pop operation
mystack.prototype.pop = function() {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    let front = this.q1.shift();
    this.q2.push(front);
  }
  let ans = this.q1.shift();

  // swap queues
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return ans;
}

// top operation
mystack.prototype.top = function() {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    let frontel = this.q1.shift();
    this.q2.push(frontel);
  }

  let newelt = this.q1.shift();
  this.q2.push(newelt); // restore element back

  // swap queues
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return newelt;
}

// empty operation
mystack.prototype.empty = function() {
  return this.q1.length === 0;
}

let st = new mystack();
st.push(10);
st.push(20);
st.push(30);

console.log(st.top());   // 30
console.log(st.pop());   // 30
console.log(st.top());   // 20
console.log(st.empty()); // false
console.log(st.pop());   // 20
console.log(st.pop());   // 10
console.log(st.empty()); // true
