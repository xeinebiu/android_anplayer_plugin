import { Thumbnail } from './thumbnail.model';
import { ContentType } from '../enum';

/**
 * Lightweight representation of a person, group, or organisation.
 *
 * Can represent:
 * - An actor, director, writer, or other film/TV contributor
 * - A recording artist, band, or music group
 * - A YouTube channel or podcast host
 * - A production studio or record label
 *
 * For the full detail record (biography, aliases, popularity, etc.) see
 * `AuthorDetail`.
 */
export type Author = Readonly<{
    /** Display name (stage name, real name, channel name, etc.). */
    name: string;
    /**
     * Short description shown in list/grid cards. When this `Author` appears
     * inside `MediaDetail.cast`, use this field for the character name;
     * inside `MediaDetail.crew`, use it for the job title.
     */
    description: string;
    /** Canonical URI used to load or identify the author. */
    uri: URL;
    /** Profile photo, avatar, or logo. */
    thumbnail?: Thumbnail;
    /** Discriminant tag — always `ContentType.author`. */
    type: ContentType.author;
}>;

export function createAuthor(author: Omit<Author, 'type'>): Author {
    return {
        ...author,
        type: ContentType.author,
    };
}
