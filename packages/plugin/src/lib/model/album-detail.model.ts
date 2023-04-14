import { Thumbnail } from './thumbnail.model';
import { Author } from './author.model';
import { ContentType } from '../enum';

export type AlbumDetail = Readonly<{
    id: string;
    name: string;
    description: string;
    uri: URL;
    thumbnail?: Thumbnail;
    author?: Author;
    tracksCount?: number;
    type: ContentType.albumDetail;
}>;

export function createAlbumDetail(
    albumDetail: Omit<AlbumDetail, 'type'>,
): AlbumDetail {
    return {
        ...albumDetail,
        type: ContentType.albumDetail,
    };
}
