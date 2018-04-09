function Fn1(){
  this.numbers = ['Um', 'Dois'];

  var self = this;
  this.numbers.forEach(function(value, index){
    if(index == 1)
      self.numbers[index] = 'Oi'
  })
}

function Fn2(){
  this.numbers = ['Um', 'Dois'];

  this.numbers.forEach((value, index) => {
    if(index == 1)
      this.numbers[index] = 'Oi'
  })
}

var fn1 = new Fn1();
var fn2 = new Fn2();
console.log(fn2.numbers)
