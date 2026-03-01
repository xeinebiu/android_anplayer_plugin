import { ThumbnailSizes } from './thumbnail-sizes.model';

/**
 * Container for portrait and landscape thumbnail orientations.
 *
 * Plugins should populate whichever orientation(s) the source provides:
 * - **portrait** — taller-than-wide imagery, typical for movies and TV shows
 *   (poster art) and music albums.
 * - **landscape** — wider-than-tall imagery, typical for video content,
 *   YouTube-style thumbnails, and hero banners.
 *
 * AN Player automatically selects the appropriate orientation based on the
 * current UI context (e.g. portrait for a movie grid, landscape for a video
 * feed).
 */
export type Thumbnail = Readonly<{
    /** Portrait-oriented image variants (e.g. movie poster, album cover). */
    portrait?: ThumbnailSizes;
    /** Landscape-oriented image variants (e.g. video thumbnail, hero banner). */
    landscape?: ThumbnailSizes;
}>;
