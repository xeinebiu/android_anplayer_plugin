import { Extractor } from './extractor';
import { Album, Author, Media } from '../model';

export abstract class SearchExtractor extends Extractor<
    Media | Album | Author
> {
    abstract getQuery(): string | undefined;
}
