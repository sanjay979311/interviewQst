function outest() {
  var c = 20;
  function outer(str) {
    // let a = 10;
    function inner() {
      console.log(a, c, str);
    }
    return inner;
  }
  return outer;
}
let a = 100;
outest()("Hello There")();