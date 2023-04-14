import { Thumbnail } from './thumbnail.model';
import { Author } from './author.model';
import { ContentType } from '../enum';

export type Album = Readonly<{
    id: string;
    name: string;
    description: string;
    uri: URL;
    type: ContentType.album;
    thumbnail?: Thumbnail;
    author?: Author;
}>;

export function createAlbum(album: Omit<Album, 'type'>): Album {
    return {
        ...album,
        type: ContentType.album,
    };
}
