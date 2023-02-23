import { Uri } from '../type';

export class StreamParsingError extends Error {
    constructor(public readonly media: Uri, public readonly stream: Uri) {
        super(`${media}, ${stream}`);
    }
}
