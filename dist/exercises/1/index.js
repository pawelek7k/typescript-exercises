"use strict";
var Genre;
(function (Genre) {
    Genre["Fiction"] = "Fiction";
    Genre["NonFiction"] = "NonFiction";
    Genre["Fantasy"] = "Fantasy";
    Genre["Biography"] = "Biography";
    Genre["ScienceFiction"] = "ScienceFiction";
})(Genre || (Genre = {}));
var library = [
    {
        title: 'ok',
        author: 'okok',
        yearPublished: 2,
        genre: Genre.Fiction,
        isAvailable: false,
    }
];
console.log(library);
//# sourceMappingURL=index.js.map