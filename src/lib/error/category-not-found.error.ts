/**
 * Thrown by `CategoryExtractor.getCategory()` when the requested genre,
 * section, or browse node cannot be found at the given URI (e.g. the
 * category was removed or the URI is no longer valid).
 */
export class CategoryNotFoundError extends Error {
    /**
     * @param category - The URI of the category that could not be found.
     *   Used as the error message so the URI is visible in stack traces and logs.
     */
    constructor(public readonly category: URL) {
        super(category.toString());
    }
}
