export class MediaNotFoundError extends Error {
    constructor(public readonly media: URL) {
        super(media.toString());
    }
}
