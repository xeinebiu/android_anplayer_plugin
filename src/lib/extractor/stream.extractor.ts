import { Extractor } from './extractor';
import { DirectStream, StreamDescription, WebPlayerStream } from '../model';

export type StreamExtractor = Extractor<
    never,
    {
        getStreams(
            uri: URL,
        ): Promise<DirectStream[] | StreamDescription[] | WebPlayerStream[]>;

        getStreamDescription(uri: URL): Promise<StreamDescription>;
    }
>;
