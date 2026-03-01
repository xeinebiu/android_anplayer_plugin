import { Extractor } from './extractor';
import {
    Media,
    MediaDetail,
    DirectStream,
    StreamDescription,
    Subtitle,
    WebPlayerStream,
} from '../model';

/**
 * Extractor for a single playable media item.
 *
 * Returned by `AnPlayerExtractor.getMediaExtractor(media)`. Provides access
 * to the item's full metadata, all available stream variants, subtitles, and
 * an optional trailer. The root `next()` method yields related or recommended
 * media items to show alongside the player.
 */
export type MediaExtractor = Extractor<
    Media,
    {
        /**
         * Returns audio-only stream variants (e.g. for music or podcast
         * playback without a video track).
         * The array may contain a mix of `DirectStream`, `WebPlayerStream`,
         * and `StreamDescription` items.
         */
        getAudioStream(): Promise<
            (DirectStream | WebPlayerStream | StreamDescription)[]
        >;

        /**
         * Returns video-only (no audio) stream variants (e.g. DASH video
         * tracks intended to be paired with a separate audio stream).
         * The array may contain a mix of `DirectStream`, `WebPlayerStream`,
         * and `StreamDescription` items.
         */
        getVideoOnlyStream(): Promise<
            (DirectStream | WebPlayerStream | StreamDescription)[]
        >;

        /**
         * Returns mixed audio+video stream variants — the most common case
         * for standard video playback.
         * The array may contain a mix of `DirectStream`, `WebPlayerStream`,
         * and `StreamDescription` items.
         */
        getMixedVideoStream(): Promise<
            (DirectStream | WebPlayerStream | StreamDescription)[]
        >;

        /**
         * Returns a trailer stream for the item, or `null` if no trailer is
         * available.
         */
        getTrailer(): Promise<
            DirectStream | WebPlayerStream | StreamDescription | null
        >;

        /**
         * Returns all available subtitle tracks for this item.
         */
        getSubtitles(): Promise<Subtitle[]>;

        /**
         * Returns the full detail record for this item.
         *
         * Throw `MediaNotFoundError` if the item no longer exists.
         */
        getMedia(): Promise<MediaDetail>;
    }
>;
