"use strict";
var registerUser = function (user) {
    if ("adminCode" in user) {
        console.log('Admin created');
    }
    else if ("guestCode" in user) {
        console.log('Guest created');
    }
    else {
        console.log('User created');
    }
};
var user = { username: "johndoe", email: "johndoe@example.com" };
var admin = { username: "admin1", email: "admin1@example.com", adminCode: "1234" };
var guest = { username: "guest1", email: "guest1@example.com", guestCode: "5678" };
registerUser(user);
registerUser(admin);
registerUser(guest);
//# sourceMappingURL=index.js.map