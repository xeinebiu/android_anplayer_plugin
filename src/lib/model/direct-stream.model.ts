import { ContentType } from '../enum';

/**
 * A raw, directly playable stream URL.
 *
 * Use this when the plugin can provide a fully resolved URL that a media
 * player can open without any further processing — for example:
 * - A plain MP4 or WebM video file URL
 * - An HLS `.m3u8` or DASH `.mpd` manifest URL that ExoPlayer can ingest
 *   directly
 * - A direct MP3 / AAC audio file URL
 *
 * If the URL requires additional resolution (e.g. it redirects through a
 * proprietary player page), use `WebPlayerStream` or `StreamDescription`
 * instead.
 */
export type DirectStream = Readonly<{
    /** The fully resolved, directly playable stream URL. */
    uri: URL;
    /**
     * HTTP headers required to fetch this stream (e.g. `Authorization`,
     * `Referer`, or session cookies). Omit if no special headers are needed.
     */
    headers?: Record<string, string>;
    /** Discriminant tag — always `ContentType.streamDirect`. */
    type: ContentType;
    /**
     * MIME type of the stream (e.g. `"video/mp4"`, `"application/x-mpegURL"`).
     * Providing this helps the player avoid an extra HEAD request to detect
     * the format. Omit if unknown.
     */
    mimeType?: string;
}>;

export function createDirectStream(
    stream: Omit<DirectStream, 'type'>,
): DirectStream {
    return {
        ...stream,
        type: ContentType.streamDirect,
    };
}
