import { Author } from './author.model';
import { ContentType } from '../enum';

export type Comment = Readonly<{
    id: string;
    publishedTime: Date;
    text: string;
    author?: Author;
    type: ContentType.comment;
}>;

export function createComment(comment: Omit<Comment, 'type'>): Comment {
    return {
        ...comment,
        type: ContentType.comment,
    };
}
