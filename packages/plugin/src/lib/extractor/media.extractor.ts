import { Extractor } from './extractor';
import { Media, Subtitle } from '../model';

export type MediaExtractor = Extractor<
    Media,
    {
        getAudioStream(): Promise<MediaStream[]>;

        getVideoOnlyStream(): Promise<MediaStream[]>;

        getMixedVideoStream(): Promise<MediaStream[]>;

        getSubtitles(): Promise<Subtitle[]>;

        getMedia(): Promise<Media>;
    }
>;
