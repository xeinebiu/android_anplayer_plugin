import { Thumbnail } from './thumbnail.model';
import { Author } from './author.model';
import { ContentType } from '../enum';

export type Media = Readonly<{
    name: string;
    description: string;
    uri: URL;
    thumbnail?: Thumbnail;
    duration?: number;
    isVideo: boolean;
    author?: Author;
    browse: boolean;
    type: ContentType.media;
}>;

export function createMedia(media: Omit<Media, 'type'>): Media {
    return {
        ...media,
        type: ContentType.media,
    };
}
