"use strict";
var addressBook = [];
var addContact = function (addressBook, contact) {
    if ([contact.name, contact.email, contact.number].some(function (field) { return field.trim() === ''; })) {
        console.log('Proszę wypełnić wszystkie dane.');
    }
    else {
        addressBook.push(contact);
        console.log('Kontakt dodany pomyślnie.');
    }
};
var getContacts = function (addressBook) {
    if (addressBook.length === 0) {
        console.log('Książka adresowa jest pusta.');
    }
    else {
        addressBook.forEach(function (contact, index) {
            console.log("".concat(index, ": ").concat(contact.name, ", ").concat(contact.email, ", ").concat(contact.number));
        });
    }
};
var getByName = function (addressBook, name) {
    var foundContacts = addressBook.filter(function (contact) { return contact.name.toLowerCase() === name.toLowerCase(); });
    if (foundContacts.length > 0) {
        foundContacts.forEach(function (contact, index) {
            console.log("Znaleziono kontakt: ".concat(index, ": ").concat(contact.name, ", ").concat(contact.email, ", ").concat(contact.number));
        });
    }
    else {
        console.log("Nie znaleziono kontaktu o imieniu: ".concat(name));
    }
};
var deleteContact = function (addressBook, name) {
    var initialLength = addressBook.length;
    var updatedAddressBook = addressBook.filter(function (contact) { return contact.name.toLowerCase() !== name.toLowerCase(); });
    if (updatedAddressBook.length < initialLength) {
        console.log('Kontakt został usunięty');
        addressBook.length = 0;
        addressBook.push.apply(addressBook, updatedAddressBook);
    }
    else {
        console.log('Nie znaleziono kontaktu.');
    }
};
//# sourceMappingURL=index.js.map