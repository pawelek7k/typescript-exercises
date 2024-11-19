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
//# sourceMappingURL=index.js.map