import { Extractor } from './extractor';
import { DirectStream, StreamDescription, WebPlayerStream } from '../model';

/**
 * Extractor for resolving arbitrary stream URIs.
 *
 * Returned by `AnPlayerExtractor.getStreamExtractor()`. Used when AN Player
 * encounters a URI classified as a direct stream or description stream via
 * `isDirectStream()` / `isDescriptionStream()` but needs the plugin's help to
 * turn it into playable streams.
 *
 * The `next()` method is never called on this extractor (`Next = never`);
 * all interaction goes through `getStreams` and `getStreamDescription`.
 */
export type StreamExtractor = Extractor<
    never,
    {
        /**
         * Resolves a URI into one or more playable stream variants.
         *
         * @param uri - The stream URI to resolve (e.g. a signed CDN URL, an
         *   HLS manifest URL, or a web-player embed URL).
         * @returns An array of `DirectStream`, `StreamDescription`, or
         *   `WebPlayerStream` items. AN Player will pick the best variant
         *   based on user preferences and device capabilities.
         */
        getStreams(
            uri: URL,
        ): Promise<DirectStream[] | StreamDescription[] | WebPlayerStream[]>;

        /**
         * Fetches and returns the `StreamDescription` for a manifest URI.
         *
         * @param uri - URI of the stream description (e.g. an HLS `.m3u8` or
         *   DASH `.mpd` manifest).
         *
         * Throw `StreamDescriptionNotFoundError` if the URI cannot be resolved.
         */
        getStreamDescription(uri: URL): Promise<StreamDescription>;
    }
>;
