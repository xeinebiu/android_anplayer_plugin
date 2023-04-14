import { Extractor } from './extractor';
import { Album, Author, Media } from '../model';

export type FeedExtractor = Extractor<Author | Media | Album>;
