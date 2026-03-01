import { Extractor } from './extractor';
import { Album, AuthorDetail, Media } from '../model';

/**
 * Extractor for the content of a single author (channel, artist,
 * studio, etc.).
 *
 * Returned by `AnPlayerExtractor.getAuthorExtractor(author)`. The root
 * `next()` method yields the author's published items, standalone tracks,
 * albums, or a mix of both.
 */
export type AuthorExtractor = Extractor<
    Media | Album,
    {
        /**
         * Returns the full detail record for this author (biography, artwork,
         * popularity, aliases, etc.).
         *
         * Throw `AuthorNotFoundError` if the author no longer exists.
         */
        getAuthor(): Promise<AuthorDetail>;
    }
>;
