/**
 * Thrown when the plugin successfully fetched a stream URL but failed to
 * parse or extract usable stream data from the response.
 */
export class StreamParsingError extends Error {
    /**
     * @param media  - URI of the media item being resolved.
     * @param stream - URI of the stream that failed to parse.
     */
    constructor(
        public readonly media: URL,
        public readonly stream: URL,
    ) {
        super(`${media}, ${stream}`);
    }
}
