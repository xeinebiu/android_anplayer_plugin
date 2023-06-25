import { Extractor } from './extractor';
import { Media, MediaDetail, Stream, Subtitle } from '../model';

export type MediaExtractor = Extractor<
    Media,
    {
        getAudioStream(): Promise<Stream[]>;

        getVideoOnlyStream(): Promise<Stream[]>;

        getMixedVideoStream(): Promise<Stream[]>;

        getDirectStream(streams: Stream[]): Stream[];

        getSubtitles(): Promise<Subtitle[]>;

        getMedia(): Promise<MediaDetail>;
    }
>;
