import { Uri } from '../type';

export class AlbumNotFoundError extends Error {
    constructor(public readonly album: Uri) {
        super(album);
    }
}
