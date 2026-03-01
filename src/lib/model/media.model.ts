import { Thumbnail } from './thumbnail.model';
import { Author } from './author.model';
import { ContentType } from '../enum';

/**
 * Lightweight representation of a single playable item.
 *
 * Can represent:
 * - A movie or short film entry in a catalogue
 * - A TV episode in a season listing
 * - A music track in an album or playlist
 * - Any other individually playable piece of content shown in a collection
 *
 * For the full detail record (synopsis, cast, ratings, etc.) see `MediaDetail`.
 */
export type Media = Readonly<{
    /** Display title of the item. */
    name: string;
    /** Short description or subtitle shown in list/grid cards. */
    description: string;
    /** Canonical URI used to load or identify the item. */
    uri: URL;
    /** Cover art, poster, or thumbnail image. */
    thumbnail?: Thumbnail;
    /** Playback duration in seconds. */
    duration?: number;
    /** `true` if the item contains a video track, `false` for audio-only. */
    isVideo: boolean;
    /** Primary creator — director, uploader, recording artist, etc. */
    author?: Author;
    /**
     * `true` if opening the URI should browse into detail content (e.g. a
     * movie details Screen) rather than play it directly.
     */
    browse: boolean;
    /** Normalised audience rating for display as a badge (typically 0–10). */
    score?: number;
    /** Number of individual votes or ratings that make up `score`. */
    scoreCount?: number;
    /** Title in the item's original language, used for disambiguation or search. */
    originalTitle?: string;
    /** Discriminant tag — always `ContentType.media`. */
    type: ContentType.media;
}>;

export function createMedia(media: Omit<Media, 'type'>): Media {
    return {
        ...media,
        type: ContentType.media,
    };
}
