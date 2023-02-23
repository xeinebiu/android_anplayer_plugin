import { Thumbnail } from './thumbnail.model';
import { Author } from './author.model';
import { Uri } from '../type';

export type AlbumDetail = Readonly<{
    id: string;
    name: string;
    description: string;
    uri: Uri;
    thumbnail?: Thumbnail;
    author?: Author;
    tracksCount?: number;
}>;
