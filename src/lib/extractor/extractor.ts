/**
 * Base paginated extractor interface.
 *
 * All concrete extractor types extend this interface. AN Player drives
 * pagination by calling `next()` repeatedly until it returns an empty array.
 *
 * @typeParam Next - The union of model types that `next()` can yield.
 *   For example, `Media | Album` for a source that mixes standalone tracks
 *   and collections in the same list.
 * @typeParam Body - Optional extra methods specific to the extractor (e.g.
 *   `getAlbum()`, `getMedia()`). Defaults to `unknown` when the extractor
 *   only paginates and has no additional operations.
 */
export type Extractor<Next, Body = unknown> = Body & {
    /**
     * Fetches the next page of results.
     *
     * @returns A promise that resolves to an array of items. AN Player will
     *   keep calling `next()` as long as the array is non-empty. Return an
     *   empty array to signal end-of-feed.
     */
    next(): Promise<Array<Next>>;
};
