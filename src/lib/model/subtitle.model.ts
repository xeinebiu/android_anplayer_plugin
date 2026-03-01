/**
 * A subtitle or closed-caption track for a media item.
 *
 * AN Player displays the available subtitle tracks in the player's subtitle
 * selector using `displayLanguageName`. The `locale` is used internally for
 * sorting and matching user preferences.
 */
export type Subtitle = Readonly<{
    /**
     * Human-readable language name shown in the subtitle selector
     * (e.g. `"English"`, `"Español"`, `"Forced (English)"`).
     */
    displayLanguageName: string;
    /** URI of the subtitle file (e.g. a `.vtt` or `.srt` URL). */
    uri: URL;
    /**
     * HTTP headers required to fetch the subtitle file. Omit if no special
     * headers are needed.
     */
    headers?: Record<string, string>;
    /**
     * BCP 47 / IETF language tag for this track (e.g. `"en"`, `"es-419"`,
     * `"fr-CA"`). Used for matching against user language preferences.
     */
    locale: string;
    /**
     * MIME type of the subtitle file (e.g. `"text/vtt"`, `"application/x-subrip"`).
     * Providing this helps the player select the correct parser. Omit if unknown.
     */
    mimeType?: string;
}>;
