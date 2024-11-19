class LibraryBook {
    title: string;
    author: string;
    isbn: string;

    constructor(title: string, author: string, isbn: string) {
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }

    displayInfo(): void {
        console.log(`Title: [${this.title}], Author: [${this.author}], ISBN: [${this.isbn}]`)
    }
}