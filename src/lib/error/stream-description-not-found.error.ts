export class StreamDescriptionNotFoundError extends Error {
    constructor(public readonly streamDescription: URL) {
        super(streamDescription.toString());
    }
}
