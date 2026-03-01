import { ThumbnailSource } from './thumbnail-source.model';

/**
 * A set of size variants for a single thumbnail orientation.
 *
 * Provide as many variants as the source makes available. AN Player picks the
 * most appropriate size for the current display context to avoid loading
 * unnecessarily large images on small cards.
 *
 * All three sizes are optional.
 */
export type ThumbnailSizes = Readonly<{
    /** Low-resolution variant, suitable for small list thumbnails. */
    small?: ThumbnailSource;
    /** Medium-resolution variant, suitable for grid cards. */
    medium?: ThumbnailSource;
    /** High-resolution variant, suitable for detail screens and hero images. */
    large?: ThumbnailSource;
}>;
