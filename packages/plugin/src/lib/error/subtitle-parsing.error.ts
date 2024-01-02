export class SubtitleParsingError extends Error {
    constructor(public readonly media: URL, public readonly subtitle: URL) {
        super(`${media}, ${subtitle}`);
    }
}
