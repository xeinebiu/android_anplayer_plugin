/**
 * Thrown by `MediaExtractor.getMedia()` when the requested item cannot be
 * found at the given URI (e.g. the video was removed, a private video was
 * requested without authentication, or the URI is stale).
 */
export class MediaNotFoundError extends Error {
    /**
     * @param media - The URI of the media item that could not be found. Used as
     *   the error message so the URI is visible in stack traces and logs.
     */
    constructor(public readonly media: URL) {
        super(media.toString());
    }
}
