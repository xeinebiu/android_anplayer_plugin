import { Thumbnail } from './thumbnail.model';
import { Author } from './author.model';
import { ContentType } from '../enum';

/**
 * Full detail record for a single playable item.
 *
 * Can represent:
 * - A movie or short film
 * - A single TV episode
 * - A music track or podcast episode
 * - Any other individually playable piece of content
 */
export type MediaDetail = Readonly<{
    /** Display title of the item. */
    name: string;
    /** Synopsis, plot summary, or any descriptive text. */
    description: string;
    /** Canonical URI used to load or identify the item. */
    uri: URL;
    /** Cover art, poster, or thumbnail image. */
    thumbnail?: Thumbnail;
    /** Playback duration in seconds. */
    duration?: number;
    /** `true` if the item contains a video track, `false` for audio-only. */
    isVideo: boolean;
    /**
     * `true` if opening the URI should browse into detail content (e.g. a
     * movie details Screen) rather than play it directly.
     */
    browse: boolean;
    /** Primary creator — director, uploader, recording artist, etc. */
    author?: Author;
    /** Genre or category tags (e.g. `["Action", "Thriller"]`). */
    genres?: string[];
    /** Original release or upload date. */
    publishedDate?: Date;
    /** Total view / play count reported by the source. */
    views?: number;
    /** Number of likes or positive reactions. */
    likes?: number;
    /** Number of dislikes or negative reactions. */
    dislikes?: number;
    /** Normalised audience rating, typically on a 0–10 scale. */
    score?: number;
    /** Number of individual votes or ratings that make up `score`. */
    scoreCount?: number;
    /** Source-specific popularity index (higher = more popular). */
    popularity?: number;
    /** Title in the item's original language (e.g. for non-English content). */
    originalTitle?: string;
    /** ISO 639-1 language code of the original production (e.g. `"en"`, `"ja"`). */
    originalLanguage?: string;
    /** Age or audience classification (e.g. `"PG-13"`, `"TV-MA"`, `"18+"`). */
    contentRating?: string;
    /** `true` if the item is intended for adult audiences only. */
    adult?: boolean;
    /** Short promotional or descriptive tagline. */
    tagline?: string;
    /**
     * Ordered list of cast members.
     * Use `Author.description` to store the character name.
     */
    cast?: Author[];
    /**
     * List of crew members (directors, writers, editors, etc.).
     * Use `Author.description` to store the job title or role.
     */
    crew?: Author[];
    /** Discriminant tag — always `ContentType.mediaDetail`. */
    type: ContentType.mediaDetail;
}>;

export function createMediaDetail(
    mediaDetail: Omit<MediaDetail, 'type'>,
): MediaDetail {
    return {
        ...mediaDetail,
        type: ContentType.mediaDetail,
    };
}
