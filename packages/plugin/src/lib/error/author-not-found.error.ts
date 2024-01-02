export class AuthorNotFoundError extends Error {
    constructor(public readonly author: URL) {
        super(author.toString());
    }
}
