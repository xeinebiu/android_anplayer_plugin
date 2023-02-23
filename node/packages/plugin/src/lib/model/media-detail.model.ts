import { Thumbnail } from './thumbnail.model';
import { Author } from './author.model';
import { Uri } from '../type';

export type MediaDetail = Readonly<{
    id: string;
    name: string;
    description: string;
    uri: Uri;
    thumbnail?: Thumbnail;
    duration?: number;
    isVideo: boolean;
    author?: Author;
    genre?: string;
    publishedDate?: Date;
    views?: number;
    likes?: number;
    dislikes?: number;
    keywords?: string[];
}>;
