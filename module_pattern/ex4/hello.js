var Hello = function () {};

Hello.prototype.log = function(){
  console.log('Ollar World!');
};

module.exports = new Hello();
