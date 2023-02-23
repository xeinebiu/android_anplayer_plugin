import { Author } from './author.model';

export type Comment = Readonly<{
    id: string;
    publishedTime: Date;
    text: string;
    author?: Author;
}>;
