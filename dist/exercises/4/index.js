"use strict";
var LibraryBook = /** @class */ (function () {
    function LibraryBook(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    LibraryBook.prototype.displayInfo = function () {
        console.log("Title: [".concat(this.title, "], Author: [").concat(this.author, "], ISBN: [").concat(this.isbn, "]"));
    };
    return LibraryBook;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        var exists = this.books.some(function (b) { return b.isbn === book.isbn; });
        if (exists) {
            console.log("Book with ISBN [".concat(book.isbn, "] is already in the library."));
        }
        else {
            this.books.push(book);
            console.log("Book [".concat(book.title, "] added to the library."));
        }
    };
    Library.prototype.listBooks = function () {
        if (this.books.length === 0) {
            console.log("The library is empty.");
        }
        else {
            console.log("Books in the library:");
            this.books.forEach(function (book) { return book.displayInfo(); });
        }
    };
    return Library;
}());
//# sourceMappingURL=index.js.map