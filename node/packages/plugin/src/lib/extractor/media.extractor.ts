import { Extractor } from './extractor';
import { Media, Subtitle } from '../model';

export abstract class MediaExtractor extends Extractor<Media> {
    abstract getAudioStream(): Promise<MediaStream[]>;

    abstract getVideoOnlyStream(): Promise<MediaStream[]>;

    abstract getMixedVideoStream(): Promise<MediaStream[]>;

    abstract getSubtitles(): Promise<Subtitle[]>;

    abstract getMedia(): Promise<Media>;
}
