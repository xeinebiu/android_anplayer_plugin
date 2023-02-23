import { Uri } from '../type';

export class AuthorNotFoundError extends Error {
    constructor(public readonly author: Uri) {
        super(author);
    }
}
