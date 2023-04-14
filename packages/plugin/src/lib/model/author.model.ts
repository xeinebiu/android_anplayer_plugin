import { Thumbnail } from './thumbnail.model';
import { ContentType } from '../enum';

export type Author = Readonly<{
    id: string;
    name: string;
    description: string;
    uri: URL;
    thumbnail?: Thumbnail;
    type: ContentType.author;
}>;

export function createAuthor(author: Omit<Author, 'type'>): Author {
    return {
        ...author,
        type: ContentType.author,
    };
}
