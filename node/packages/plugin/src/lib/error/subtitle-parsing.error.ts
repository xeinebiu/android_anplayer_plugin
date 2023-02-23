import { Uri } from '../type';

export class SubtitleParsingError extends Error {
    constructor(public readonly media: Uri, public readonly subtitle: Uri) {
        super(`${media}, ${subtitle}`);
    }
}
