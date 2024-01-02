import { Extractor } from './extractor';
import {
    Album,
    AlbumDetail,
    Author,
    AuthorDetail,
    Media,
    MediaDetail,
} from '../model';

export type FeedExtractor = Extractor<
    Author | Media | Album | AuthorDetail | MediaDetail | AlbumDetail
>;
