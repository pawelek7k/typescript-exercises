"use strict";
var registerUser = function (user) {
    if ("adminCode" in user) {
        console.log('Admin created');
    }
    else {
        console.log('User created');
    }
};
//# sourceMappingURL=index.js.map