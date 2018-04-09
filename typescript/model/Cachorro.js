"use strict";
exports.__esModule = true;
var Cachorro = /** @class */ (function () {
    function Cachorro(name) {
        this.nome = name;
    }
    Cachorro.prototype.getNome = function () {
        return this.nome + '  ' + this.latir();
    };
    Cachorro.prototype.latir = function () {
        return 'Aaauuuuu';
    };
    return Cachorro;
}());
exports["default"] = Cachorro;
