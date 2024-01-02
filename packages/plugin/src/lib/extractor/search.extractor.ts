import { Extractor } from './extractor';
import {
    Album,
    AlbumDetail,
    Author,
    AuthorDetail,
    Media,
    MediaDetail,
} from '../model';

export type SearchExtractor = Extractor<
    Media | Album | Author | MediaDetail | AlbumDetail | AuthorDetail,
    { getQuery(): string }
>;
