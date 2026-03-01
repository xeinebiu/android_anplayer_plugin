/**
 * Thrown by `AlbumExtractor.getAlbum()` when the requested album, season,
 * or collection cannot be found at the given URI (e.g. deleted content, bad
 * deep-link, or the source returned an empty result).
 */
export class AlbumNotFoundError extends Error {
    /**
     * @param album - The URI of the album that could not be found. Used as
     *   the error message so the URI is visible in stack traces and logs.
     */
    constructor(public readonly album: URL) {
        super(album.toString());
    }
}
