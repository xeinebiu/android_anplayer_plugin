import { Extractor } from './extractor';
import { Album, AlbumDetail, Media } from '../model';

/**
 * Extractor for the contents of a single album, season, or collection.
 *
 * Returned by `AnPlayerExtractor.getAlbumExtractor(album)`. The root
 * `next()` method yields the items inside the collection (tracks, episodes,
 * films, or nested sub-albums).
 */
export type AlbumExtractor = Extractor<
    Media | Album,
    {
        /**
         * Returns the full detail record for this album (title, description,
         * artwork, ratings, etc.).
         *
         * Throw `AlbumNotFoundError` if the album no longer exists.
         */
        getAlbum(): Promise<AlbumDetail>;
    }
>;
