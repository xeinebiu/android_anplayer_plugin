import { Thumbnail } from './thumbnail.model';
import { Uri } from '../type';

export type AuthorDetail = Readonly<{
    id: string;
    name: string;
    description: string;
    uri: Uri;
    thumbnail?: Thumbnail;
}>;
