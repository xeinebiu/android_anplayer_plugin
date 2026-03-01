/**
 * Thrown when the plugin successfully fetched a subtitle URL but failed to
 * parse it into a usable format.
 */
export class SubtitleParsingError extends Error {
    /**
     * @param media    - URI of the media item whose subtitles were being fetched.
     * @param subtitle - URI of the subtitle file that failed to parse.
     */
    constructor(
        public readonly media: URL,
        public readonly subtitle: URL,
    ) {
        super(`${media}, ${subtitle}`);
    }
}
