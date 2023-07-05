import { Extractor } from './extractor';
import { DirectStream } from '../model';

export type StreamExtractor = Extractor<
    never,
    { getDirectStream(uri: URL): DirectStream }
>;
