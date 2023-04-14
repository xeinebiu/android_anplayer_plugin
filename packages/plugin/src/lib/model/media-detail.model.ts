import { Thumbnail } from './thumbnail.model';
import { Author } from './author.model';
import { ContentType } from '../enum';

export type MediaDetail = Readonly<{
    id: string;
    name: string;
    description: string;
    uri: URL;
    trailer?: URL;
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
