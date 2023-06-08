export class BookDetail {
    title: string;
    infoLink: string;
    imageLinks: string;
    authors: string;
    id: string;


    constructor(obj?: any) {
        this.title = obj && obj.title || null;
        this.infoLink = obj && obj.infoLink || null;
        this.imageLinks = obj && obj.imageLinks || null;
        this.id = obj && obj.id || null;
        this.authors = obj && obj.authors || null;
    }
}
