import { Extractor } from './extractor';
import {
    Media,
    MediaDetail,
    DirectStream,
    StreamDescription,
    Subtitle,
    WebPlayerStream,
} from '../model';

export type MediaExtractor = Extractor<
    Media,
    {
        getAudioStream(): Promise<
            (DirectStream | WebPlayerStream | StreamDescription)[]
        >;

        getVideoOnlyStream(): Promise<
            (DirectStream | WebPlayerStream | StreamDescription)[]
        >;

        getMixedVideoStream(): Promise<
            (DirectStream | WebPlayerStream | StreamDescription)[]
        >;

        getTrailer(): Promise<
            DirectStream | WebPlayerStream | StreamDescription | null
        >;

        getSubtitles(): Promise<Subtitle[]>;

        getMedia(): Promise<MediaDetail>;
    }
>;
