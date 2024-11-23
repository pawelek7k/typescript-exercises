"use strict";
// class LibraryBook {
//     title: string;
//     author: string;
//     isbn: string;
//     constructor(title: string, author: string, isbn: string) {
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn
//     }
//     displayInfo(): void {
//         console.log(`Title: [${this.title}], Author: [${this.author}], ISBN: [${this.isbn}]`)
//     }
// }
// class Library {
//     books: Book[] = []
//     addBook(book: Book): void {
//         const exists = this.books.some((b) => b.isbn === book.isbn);
//         if (exists) {
//             console.log(`Book with ISBN [${book.isbn}] is already in the library.`);
//         } else {
//             this.books.push(book);
//             console.log(`Book [${book.title}] added to the library.`);
//         }
//     }
//     listBooks(): void {
//         if (this.books.length === 0) {
//             console.log("The library is empty.");
//         } else {
//             console.log("Books in the library:");
//             this.books.forEach((book) => book.displayInfo());
//         }
//     }
// }
//# sourceMappingURL=index.js.map