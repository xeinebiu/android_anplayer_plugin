export class AlbumNotFoundError extends Error {
    constructor(public readonly album: URL) {
        super(album.toString());
    }
}
