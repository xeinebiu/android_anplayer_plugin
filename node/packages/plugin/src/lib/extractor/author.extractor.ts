import { Extractor } from './extractor';
import { Album, AuthorDetail, Media } from '../model';

export abstract class AuthorExtractor extends Extractor<Media | Album> {
    abstract getAuthor(): Promise<AuthorDetail>;
}
