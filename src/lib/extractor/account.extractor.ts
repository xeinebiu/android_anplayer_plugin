import { Extractor } from './extractor';
import {
    Album,
    AlbumDetail,
    Author,
    AuthorDetail,
    Media,
    MediaDetail,
} from '../model';

export type AccountExtractor = Extractor<
    Media | Album | Author | MediaDetail | AlbumDetail | AuthorDetail,
    {
        getAlbumExtractor(): Promise<Extractor<Album | AlbumDetail>>;

        getHistoryExtractor(): Promise<Extractor<Media | MediaDetail>>;

        getPersonalisedMediaExtractor(): Promise<
            Extractor<Media | MediaDetail>
        >;

        getSubscribedAuthorExtractor(): Promise<
            Extractor<Author | AuthorDetail>
        >;
    }
>;
