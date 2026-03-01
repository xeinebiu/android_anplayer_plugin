import { Author } from './author.model';
import { ContentType } from '../enum';

/**
 * A user-submitted comment on a media item.
 */
export type Comment = Readonly<{
    /** Source-assigned unique identifier for the comment. */
    id: string;
    /** Date and time the comment was originally posted. */
    publishedTime: Date;
    /** The full text body of the comment. */
    text: string;
    /** The user who posted the comment, if available. */
    author?: Author;
    /** Discriminant tag — always `ContentType.comment`. */
    type: ContentType.comment;
}>;

export function createComment(comment: Omit<Comment, 'type'>): Comment {
    return {
        ...comment,
        type: ContentType.comment,
    };
}
