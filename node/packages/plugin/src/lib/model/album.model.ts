import { Thumbnail } from './thumbnail.model';
import { Author } from './author.model';
import { Uri } from '../type';

export type Album = Readonly<{
    id: string;
    name: string;
    description: string;
    uri: Uri;
    thumbnail?: Thumbnail;
    author?: Author;
}>;
