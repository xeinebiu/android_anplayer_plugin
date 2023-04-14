import { Extractor } from './extractor';
import { Album, Author, Media } from '../model';

export type SearchExtractor = Extractor<
    Media | Album | Author,
    { getQuery(): string }
>;
