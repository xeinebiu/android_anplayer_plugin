import { Thumbnail } from './thumbnail.model';
import { Author } from './author.model';
import { ContentType } from '../enum';

/**
 * Full detail record for a collection of media items.
 *
 * Can represent:
 * - A TV series season (items = episodes)
 * - A movie collection or franchise (items = films)
 * - A music album or EP (items = tracks)
 * - A podcast series (items = episodes)
 * - Any other named grouping of playable content
 */
export type AlbumDetail = Readonly<{
    /** Display title of the collection. */
    name: string;
    /** Synopsis, overview, or any descriptive text about the collection. */
    description: string;
    /** Canonical URI used to load or identify the collection. */
    uri: URL;
    /** Cover art or banner image for the collection. */
    thumbnail?: Thumbnail;
    /** Primary creator — show runner, recording artist, studio, etc. */
    author?: Author;
    /** Total number of items (tracks, episodes, films) in the collection. */
    tracksCount?: number;
    /** Normalised audience rating, typically on a 0–10 scale. */
    score?: number;
    /** Number of individual votes or ratings that make up `score`. */
    scoreCount?: number;
    /** Source-specific popularity index (higher = more popular). */
    popularity?: number;
    /** Title in the collection's original language. */
    originalTitle?: string;
    /** ISO 639-1 language code of the original production (e.g. `"en"`, `"ko"`). */
    originalLanguage?: string;
    /** Age or audience classification (e.g. `"PG-13"`, `"TV-MA"`, `"18+"`). */
    contentRating?: string;
    /** Discriminant tag — always `ContentType.albumDetail`. */
    type: ContentType.albumDetail;
}>;

export function createAlbumDetail(
    albumDetail: Omit<AlbumDetail, 'type'>,
): AlbumDetail {
    return {
        ...albumDetail,
        type: ContentType.albumDetail,
    };
}
