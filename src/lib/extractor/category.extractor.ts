import { Extractor } from './extractor';
import { Album, AlbumDetail, Category, Media, MediaDetail } from '../model';

/**
 * Extractor for the contents of a single category, genre, or browse section.
 *
 * Returned by `AnPlayerExtractor.getCategoryExtractor(category)`. The root
 * `next()` method yields the items listed under the category — individual
 * tracks, albums, or a mix of both.
 */
export type CategoryExtractor = Extractor<
    Media | Album | MediaDetail | AlbumDetail,
    {
        /**
         * Returns the metadata for this category (name, URI).
         *
         * Throw `CategoryNotFoundError` if the category no longer exists.
         */
        getCategory(): Promise<Category>;
    }
>;
