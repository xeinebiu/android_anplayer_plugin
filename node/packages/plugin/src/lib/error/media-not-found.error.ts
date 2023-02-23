import { Uri } from '../type';

export class MediaNotFoundError extends Error {
    constructor(public readonly media: Uri) {
        super(media);
    }
}
