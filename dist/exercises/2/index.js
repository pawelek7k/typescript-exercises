"use strict";
var addressBook = [];
var addContact = function (addressBook, contact) {
    addressBook.push(contact);
};
var getContacts = function (addressBook) {
    addressBook.forEach(function (contact, index) {
        console.log("".concat(index, ": ").concat(contact.name, ", ").concat(contact.email, ", ").concat(contact.number));
    });
};
addContact(addressBook, { name: 'John Doe', email: 'john.doe@example.com', number: '123-456-790' });
getContacts(addressBook);
//# sourceMappingURL=index.js.map