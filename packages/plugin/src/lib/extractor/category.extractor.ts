import { Extractor } from './extractor';
import { Album, Media } from '../model';

export type CategoryExtractor = Extractor<Media | Album>;
