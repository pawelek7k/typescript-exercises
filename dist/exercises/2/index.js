"use strict";
// interface Contact {
//     name: string;
//     email: string;
//     number: string;
// }
// const addressBook: Contact[] = [];
// const addContact = (addressBook: Contact[], contact: Contact): void => {
//     if ([contact.name, contact.email, contact.number].some(field => field.trim() === '')) {
//         console.log('Proszę wypełnić wszystkie dane.');
//     } else {
//         addressBook.push(contact);
//         console.log('Kontakt dodany pomyślnie.');
//     }
// };
// const getContacts = (addressBook: Contact[]): void => {
//     if (addressBook.length === 0) {
//         console.log('Książka adresowa jest pusta.');
//     } else {
//         addressBook.forEach((contact, index) => {
//             console.log(`${index}: ${contact.name}, ${contact.email}, ${contact.number}`);
//         });
//     }
// };
// const getByName = (addressBook: Contact[], name: string): void => {
//     const foundContacts = addressBook.filter(contact => contact.name.toLowerCase() === name.toLowerCase());
//     if (foundContacts.length > 0) {
//         foundContacts.forEach((contact, index) => {
//             console.log(`Znaleziono kontakt: ${index}: ${contact.name}, ${contact.email}, ${contact.number}`);
//         });
//     } else {
//         console.log(`Nie znaleziono kontaktu o imieniu: ${name}`);
//     }
// };
// const deleteContact = (addressBook: Contact[], name: string): void => {
//     const initialLength = addressBook.length;
//     const updatedAddressBook = addressBook.filter(contact => contact.name.toLowerCase() !== name.toLowerCase())
//     if (updatedAddressBook.length < initialLength) {
//         console.log('Kontakt został usunięty')
//         addressBook.length = 0;
//         addressBook.push(...updatedAddressBook)
//     } else {
//         console.log('Nie znaleziono kontaktu.')
//     }
// }
//# sourceMappingURL=index.js.map