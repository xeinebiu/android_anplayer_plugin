import { Extractor } from './extractor';
import { DirectStream, StreamDescription } from '../model';

export type StreamExtractor = Extractor<
    never,
    {
        getStreams(uri: URL): Promise<DirectStream[] | StreamDescription[]>;
        getStreamDescription(uri: URL): Promise<StreamDescription>;
    }
>;
