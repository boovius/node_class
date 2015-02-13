function *foo(y){
  var a = yield 1;
  console.log(`the value of a is ${a}`)
  var b = yield 2;
  console.log(`the value of b is ${b}`)
  var c = yield 3;
  console.log(`the value of c is ${c}`)
  var d = yield 4;
  console.log(`the value of d is ${d}`)
  yield 5;
}

var g = foo();

console.log(g.next('a'));
console.log(g.next('b'));
console.log(g.next('c'));
console.log(g.next('d'));
