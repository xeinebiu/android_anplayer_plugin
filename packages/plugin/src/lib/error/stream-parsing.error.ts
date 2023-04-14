export class StreamParsingError extends Error {
    constructor(public readonly media: URL, public readonly stream: URL) {
        super(`${media}, ${stream}`);
    }
}
