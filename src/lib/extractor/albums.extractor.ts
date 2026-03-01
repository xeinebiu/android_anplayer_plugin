import { Extractor } from './extractor';
import { Album, AlbumDetail } from '../model';

/**
 * Extractor for a paginated list of albums, seasons, or collections.
 *
 * Returned by `AnPlayerExtractor.getAlbumsExtractor(query?)`. Used both for
 * browsing (no query) and for filtering/searching collections by a keyword.
 */
export type AlbumsExtractor = Extractor<Album | AlbumDetail>;
