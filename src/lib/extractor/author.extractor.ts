import { Extractor } from './extractor';
import { Album, AuthorDetail, Media } from '../model';

export type AuthorExtractor = Extractor<
    Media | Album,
    { getAuthor(): Promise<AuthorDetail> }
>;
