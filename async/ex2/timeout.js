main();

function main() {
    fn1();
    fn2();
}

function fn1() {
    setTimeout(function(){
        console.log("Um");
    }, 1000);
}

function fn2() {
    setTimeout(function(){
        console.log("Dois");
    }, 200);
}
