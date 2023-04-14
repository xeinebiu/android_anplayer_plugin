import { Thumbnail } from './thumbnail.model';
import { ContentType } from '../enum';

export type AuthorDetail = Readonly<{
    id: string;
    name: string;
    description: string;
    uri: URL;
    thumbnail?: Thumbnail;
    type: ContentType.authorDetail;
}>;

export function createAuthorDetail(
    authorDetail: Omit<AuthorDetail, 'type'>,
): AuthorDetail {
    return {
        ...authorDetail,
        type: ContentType.authorDetail,
    };
}
