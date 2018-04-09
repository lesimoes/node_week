var fn1 = function(callback) {
  setTimeout(function(){
    console.log("Um");
    callback()
  }, 1000);
}

var fn2 = function(callback) {
  setTimeout(function(){
    console.log("Dois");
    callback()
  }, 200);
}

var fn3 = function(callback){
  setTimeout(function(){
    console.log("Três");
    callback()
  }, 200);
}

var fn4 = function(callback){
  setTimeout(function(){
    console.log("Quatro");
    callback()
  }, 200);
}

function main() {
  fn1(function(){
    fn2(function(){
      fn3(function(){
        fn4(function(){
          setTimeout(function(){
            console.log("Cinco");
          }, 200);
        })
      })
    })
  })
}

main()
