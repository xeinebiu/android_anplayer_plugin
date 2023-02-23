import { Thumbnail } from './thumbnail.model';
import { Uri } from '../type';

export type Author = Readonly<{
    id: string;
    name: string;
    description: string;
    uri: Uri;
    thumbnail?: Thumbnail;
}>;
