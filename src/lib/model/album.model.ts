import { Thumbnail } from './thumbnail.model';
import { Author } from './author.model';
import { ContentType } from '../enum';

/**
 * Lightweight representation of a collection of media items.
 *
 * Can represent:
 * - A TV series season (items = episodes)
 * - A movie collection or franchise (items = films)
 * - A music album or EP (items = tracks)
 * - A podcast series (items = episodes)
 * - Any other named grouping of playable content
 */
export type Album = Readonly<{
    /** Display title of the collection. */
    name: string;
    /** Short description or subtitle shown in list/grid cards. */
    description: string;
    /** Canonical URI used to load or identify the collection. */
    uri: URL;
    /** Discriminant tag — always `ContentType.album`. */
    type: ContentType.album;
    /** Cover art or banner image for the collection. */
    thumbnail?: Thumbnail;
    /** Primary creator — show runner, recording artist, studio, etc. */
    author?: Author;
    /** Normalised audience rating for display as a badge (typically 0–10). */
    score?: number;
    /** Number of individual votes or ratings that make up `score`. */
    scoreCount?: number;
    /** Title in the collection's original language, used for disambiguation or search. */
    originalTitle?: string;
}>;

export function createAlbum(album: Omit<Album, 'type'>): Album {
    return {
        ...album,
        type: ContentType.album,
    };
}
