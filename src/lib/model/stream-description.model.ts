import { ContentType } from '../enum';

/**
 * A manifest or container URL that AN Player must resolve before playback.
 *
 * Use this when the plugin can identify a URL that points to a stream
 * manifest or description document — such as an HLS `.m3u8`, a DASH `.mpd`,
 * or a custom playlist format — but the actual stream selection (e.g. quality
 * variant picking) should be delegated to AN Player or the player engine
 * rather than handled by the plugin.
 *
 * AN Player will pass this URI to `StreamExtractor.getStreamDescription()` or
 * directly to ExoPlayer depending on the MIME type.
 */
export type StreamDescription = Readonly<{
    /** Optional human-readable label for this stream variant (e.g. `"1080p"`). */
    name?: string;
    /** Optional description shown in the quality selector UI. */
    description?: string;
    /** URI of the manifest or stream description document. */
    uri: URL;
    /**
     * HTTP headers required to fetch this manifest (e.g. `Authorization`,
     * `Referer`, or session cookies). Omit if no special headers are needed.
     */
    headers?: Record<string, string>;
    /** Discriminant tag — always `ContentType.streamDescription`. */
    type: ContentType;
}>;

export function createStreamDescription(
    stream: Omit<StreamDescription, 'type'>,
): StreamDescription {
    return {
        ...stream,
        type: ContentType.streamDescription,
    };
}
