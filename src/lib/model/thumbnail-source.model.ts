/**
 * A single image URL representing one size variant of a thumbnail.
 *
 * Used as the leaf value inside `ThumbnailSizes`. AN Player will choose the
 * most appropriate `ThumbnailSource` based on the available display size.
 */
export type ThumbnailSource = Readonly<{
    /** Direct URL of the image file. */
    uri: URL;
    /**
     * HTTP headers required to fetch this image (e.g. `Authorization` or
     * signed query parameters). Omit if no special headers are needed.
     */
    headers?: Record<string, string>;
}>;
