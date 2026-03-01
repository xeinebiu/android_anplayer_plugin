import { Thumbnail } from './thumbnail.model';
import { ContentType } from '../enum';

/**
 * Full detail record for a person, group, or organisation associated with
 * media content.
 *
 * Can represent:
 * - An actor, director, writer, or other film/TV crew member
 * - A recording artist, band, or music group
 * - A production studio or record label
 * - A podcast host or YouTube channel
 */
export type AuthorDetail = Readonly<{
    /** Display name (stage name, real name, studio name, etc.). */
    name: string;
    /** Biography, career overview, or any descriptive text. */
    description: string;
    /** Canonical URI used to load or identify the author. */
    uri: URL;
    /** Profile photo, avatar, or logo. */
    thumbnail?: Thumbnail;
    /** Source-specific popularity index (higher = more popular). */
    popularity?: number;
    /** Alternative or stage names the author is also known by. */
    aliases?: string[];
    /**
     * Primary area of work (e.g. `"Acting"`, `"Directing"`, `"Music"`,
     * `"Production"`).
     */
    department?: string;
    /** Discriminant tag — always `ContentType.authorDetail`. */
    type: ContentType.authorDetail;
}>;

export function createAuthorDetail(
    authorDetail: Omit<AuthorDetail, 'type'>,
): AuthorDetail {
    return {
        ...authorDetail,
        type: ContentType.authorDetail,
    };
}
