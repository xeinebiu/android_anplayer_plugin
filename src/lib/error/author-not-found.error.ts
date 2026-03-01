/**
 * Thrown by `AuthorExtractor.getAuthor()` when the requested person, band,
 * channel, or studio cannot be found at the given URI (e.g. deleted account,
 * bad deep-link, or the source returned an empty result).
 */
export class AuthorNotFoundError extends Error {
    /**
     * @param author - The URI of the author that could not be found. Used as
     *   the error message so the URI is visible in stack traces and logs.
     */
    constructor(public readonly author: URL) {
        super(author.toString());
    }
}
