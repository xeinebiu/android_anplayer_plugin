import { Extractor } from './extractor';
import { Author, AuthorDetail } from '../model';

/**
 * Extractor for a paginated list of authors (channels, artists, studios,
 * etc.).
 *
 * Returned by `AnPlayerExtractor.getAuthorsExtractor(query?)`. Used both for
 * browsing (no query) and for filtering/searching authors by a keyword.
 */
export type AuthorsExtractor = Extractor<Author | AuthorDetail>;
