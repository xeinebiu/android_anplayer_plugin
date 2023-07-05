import { Extractor } from './extractor';
import {
    Media,
    MediaDetail,
    DirectStream,
    StreamDescription,
    Subtitle,
} from '../model';

export type MediaExtractor = Extractor<
    Media,
    {
        getAudioStream(): Promise<(DirectStream | StreamDescription)[]>;

        getVideoOnlyStream(): Promise<(DirectStream | StreamDescription)[]>;

        getMixedVideoStream(): Promise<(DirectStream | StreamDescription)[]>;

        getSubtitles(): Promise<Subtitle[]>;

        getMedia(): Promise<MediaDetail>;
    }
>;
