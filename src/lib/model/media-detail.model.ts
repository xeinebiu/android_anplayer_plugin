import { Thumbnail } from './thumbnail.model';
import { Author } from './author.model';
import { ContentType } from '../enum';

export type MediaDetail = Readonly<{
    name: string;
    description: string;
    uri: URL;
    thumbnail?: Thumbnail;
    duration?: number;
    isVideo: boolean;
    browse: boolean;
    author?: Author;
    genres?: string[];
    publishedDate?: Date;
    views?: number;
    likes?: number;
    dislikes?: number;
    type: ContentType.mediaDetail;
}>;

export function createMediaDetail(
    mediaDetail: Omit<MediaDetail, 'type'>,
): MediaDetail {
    return {
        ...mediaDetail,
        type: ContentType.mediaDetail,
    };
}
