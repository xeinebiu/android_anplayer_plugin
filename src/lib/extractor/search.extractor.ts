import { Extractor } from './extractor';
import {
    Album,
    AlbumDetail,
    Author,
    AuthorDetail,
    Media,
    MediaDetail,
} from '../model';

/**
 * Extractor for full-text search results.
 *
 * Returned by `AnPlayerExtractor.getSearchExtractor(query)`. Results may
 * include a mix of media items, albums, and authors depending on what the
 * source returns for the given query.
 */
export type SearchExtractor = Extractor<
    Media | Album | Author | MediaDetail | AlbumDetail | AuthorDetail,
    {
        /**
         * Returns the query string that was used to produce these results.
         */
        getQuery(): string;
    }
>;
