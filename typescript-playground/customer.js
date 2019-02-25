"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(id) {
        this.id = id;
    }
    Customer.prototype.fooBar = function () {
        var _this = this;
        var self = this;
        setTimeout(function () {
            console.log('Nutzer-ID', self.id);
        }, 2000);
        setTimeout(function () { return console.log('!! Nutzer-ID', _this.id); }, 2000);
        return 'Hallo';
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map