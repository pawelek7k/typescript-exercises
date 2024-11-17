interface Contact {
    name: string;
    email: string;
    number: string;
}

const addressBook: Contact[] = [];

const addContact = (addressBook: Contact[], contact: Contact): void => {
    addressBook.push(contact)
}

const getContacts = (addressBook: Contact[]): void => {
    addressBook.forEach((contact, index) => {
        console.log(`${index}: ${contact.name}, ${contact.email}, ${contact.number}`)
    })
}

addContact(addressBook, { name: 'John Doe', email: 'john.doe@example.com', number: '123-456-790' });

getContacts(addressBook)