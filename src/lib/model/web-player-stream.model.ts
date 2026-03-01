import { ContentType } from '../enum';

/**
 * A stream that must be played inside an embedded web player rather than
 * directly by ExoPlayer.
 *
 * Use this as a last resort when the content is protected by DRM or
 * obfuscation that cannot be unwrapped by the plugin (e.g. Widevine L1-only
 * streams, Flash-era embeds, or JavaScript-driven players). AN Player will
 * load `uri` in a WebView and let the source's own player handle playback.
 */
export type WebPlayerStream = Readonly<{
    /**
     * URL of the web player page to open in the embedded WebView (e.g. an
     * iframe embed URL or a direct player page URL).
     */
    uri: URL;
    /** Discriminant tag — always `ContentType.streamWebPlayer`. */
    type: ContentType;
}>;

export function createWebPlayerStream(
    stream: Omit<WebPlayerStream, 'type'>,
): WebPlayerStream {
    return {
        ...stream,
        type: ContentType.streamWebPlayer,
    };
}
