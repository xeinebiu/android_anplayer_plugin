import { Extractor } from './extractor';
import { Album, Author, Media } from '../model';

export abstract class FeedExtractor extends Extractor<Author | Media | Album> {}
