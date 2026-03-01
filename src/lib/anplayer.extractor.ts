import {
    AccountExtractor,
    AlbumExtractor,
    AlbumsExtractor,
    AuthorExtractor,
    AuthorsExtractor,
    AutocompleteExtractor,
    CategoriesExtractor,
    CategoryExtractor,
    FeedExtractor,
    MediaExtractor,
    SearchExtractor,
    StreamExtractor,
} from './extractor';
import { ExtractorLogger } from './logger';
import { ExtractorNotImplementedError } from './error';

/**
 * The root plugin interface for AN Player.
 *
 * A plugin exports a single value of this type — a factory function that
 * AN Player calls once with runtime context (temp folder, config, logger) and
 * receives back an object containing all the extractor factories the plugin
 * supports.
 *
 * Plugins only need to implement the capabilities they actually support.
 * Every method has a default implementation (see `createAnPlayerExtractor`)
 * that rejects with `ExtractorNotImplementedError`. AN Player inspects the
 * `is*` classification helpers to decide which UI features to enable.
 *
 * @example
 * ```ts
 * export default createAnPlayerExtractor({
 *     getFeedExtractor: () => Promise.resolve(myFeedExtractor),
 *     getMediaExtractor: (uri) => Promise.resolve(myMediaExtractor(uri)),
 *     isSupported: (uri) => Promise.resolve(uri.hostname === 'example.com'),
 * });
 * ```
 */
export type AnPlayerExtractor = (args: {
    /**
     * Absolute path to a temporary directory AN Player has created for this
     * plugin session. The plugin may write cache files, downloaded assets, or
     * other temporary data here. The directory is cleaned up by AN Player
     * between sessions.
     */
    temporaryFolderPath: string;
    /**
     * Plugin-specific configuration string (typically serialised JSON)
     * entered by the user in the plugin settings screen. Use this for API
     * keys, regional preferences, account tokens, or any other user-supplied
     * configuration your plugin needs.
     */
    config: string;
    /**
     * Logger instance provided by AN Player. Use instead of `console.*` so
     * output is visible in the in-app log viewer.
     */
    logger: ExtractorLogger;
}) => {
    /**
     * Returns an extractor for the signed-in user's account content
     * (history, subscriptions, personalised recommendations).
     *
     * Throw `NotAuthenticatedError` if no valid session is present.
     * Reject with `ExtractorNotImplementedError` if accounts are not supported.
     */
    getAccountExtractor(): Promise<AccountExtractor>;

    /**
     * Returns an extractor for the contents of a specific album, season, or
     * collection identified by `album`.
     *
     * @param album - The URI of the album to open (typically from `Album.uri`
     *   or `AlbumDetail.uri`).
     */
    getAlbumExtractor(album: URL): Promise<AlbumExtractor>;

    /**
     * Returns an extractor for browsing or filtering a list of albums.
     *
     * @param query - Optional keyword to filter results. When omitted, the
     *   extractor should return a default album listing (e.g. popular or
     *   recently updated collections).
     */
    getAlbumsExtractor(query?: string): Promise<AlbumsExtractor>;

    /**
     * Returns an extractor for the public content of a specific author
     * (channel, artist, studio, etc.) identified by `author`.
     *
     * @param author - The URI of the author to open (typically from
     *   `Author.uri` or `AuthorDetail.uri`).
     */
    getAuthorExtractor(author: URL): Promise<AuthorExtractor>;

    /**
     * Returns an extractor for browsing or filtering a list of authors.
     *
     * @param query - Optional keyword to filter results. When omitted, the
     *   extractor should return a default author listing.
     */
    getAuthorsExtractor(query?: string): Promise<AuthorsExtractor>;

    /**
     * Returns an extractor that yields search-as-you-type suggestions for
     * `query`.
     *
     * @param query - The partial search string entered by the user.
     */
    getAutocompleteExtractor(query: string): Promise<AutocompleteExtractor>;

    /**
     * Returns an extractor for the source's top-level category or genre
     * listing.
     */
    getCategoriesExtractor(): Promise<CategoriesExtractor>;

    /**
     * Returns an extractor for the contents of a specific category identified
     * by `category`.
     *
     * @param category - The URI of the category to open (typically from
     *   `Category.uri`).
     */
    getCategoryExtractor(category: URL): Promise<CategoryExtractor>;

    /**
     * Returns an extractor for the source's home or discovery feed.
     *
     * The feed is the first content surface shown to the user when they open
     * the plugin. It typically contains trending, recommended, or editorial
     * picks.
     */
    getFeedExtractor(): Promise<FeedExtractor>;

    /**
     * Returns the HTTP headers needed to load `uri` in the player or image
     * loader (e.g. `Authorization`, `Referer`, or signed cookies).
     *
     * Return an empty object `{}` if no special headers are required.
     *
     * @param uri - The URI about to be loaded.
     */
    getHeaders(uri: URL): Promise<Record<string, string>>;

    /**
     * Returns an extractor for a specific media item identified by `media`.
     *
     * @param media - The URI of the item to open (typically from `Media.uri`
     *   or `MediaDetail.uri`).
     */
    getMediaExtractor(media: URL): Promise<MediaExtractor>;

    /**
     * Returns an extractor for full-text search results matching `query`.
     *
     * @param query - The search string entered by the user.
     */
    getSearchExtractor(query: string): Promise<SearchExtractor>;

    /**
     * Returns an extractor capable of resolving arbitrary stream URIs. Used
     * when AN Player encounters a URI classified by `isDirectStream()` or
     * `isDescriptionStream()`.
     */
    getStreamExtractor(): Promise<StreamExtractor>;

    /**
     * Returns `true` if `uri` points to an album, season, or collection that
     * should be opened with `getAlbumExtractor`.
     */
    isAlbum(uri: URL): Promise<boolean>;

    /**
     * Returns `true` if `uri` points to an author, channel, or artist page
     * that should be opened with `getAuthorExtractor`.
     */
    isAuthor(uri: URL): Promise<boolean>;

    /**
     * Returns `true` if `uri` points to a category or genre page that should
     * be opened with `getCategoryExtractor`.
     */
    isCategory(uri: URL): Promise<boolean>;

    /**
     * Returns `true` if `uri` points to a single playable media item that
     * should be opened with `getMediaExtractor`.
     */
    isMediaTrack(uri: URL): Promise<boolean>;

    /**
     * Returns `true` if `uri` is a raw, directly playable stream URL that
     * should be resolved with `getStreamExtractor`.
     */
    isDirectStream(uri: URL): Promise<boolean>;

    /**
     * Returns `true` if `uri` is a stream description (manifest) that should
     * be resolved with `getStreamExtractor`.
     */
    isDescriptionStream(uri: URL): Promise<boolean>;

    /**
     * Returns `true` if this plugin can handle `uri` at all. AN Player calls
     * this before any other method to decide whether to delegate to this
     * plugin.
     */
    isSupported(uri: URL): Promise<boolean>;
};

const defaultImplementation: ReturnType<AnPlayerExtractor> = {
    getAccountExtractor: () =>
        Promise.reject(new ExtractorNotImplementedError()),
    getAlbumExtractor: () => Promise.reject(new ExtractorNotImplementedError()),
    getAlbumsExtractor: () =>
        Promise.reject(new ExtractorNotImplementedError()),
    getAuthorExtractor: () =>
        Promise.reject(new ExtractorNotImplementedError()),
    getAuthorsExtractor: () =>
        Promise.reject(new ExtractorNotImplementedError()),
    getAutocompleteExtractor: () =>
        Promise.reject(new ExtractorNotImplementedError()),
    getCategoriesExtractor: () =>
        Promise.reject(new ExtractorNotImplementedError()),
    getCategoryExtractor: () =>
        Promise.reject(new ExtractorNotImplementedError()),
    getFeedExtractor: () => Promise.reject(new ExtractorNotImplementedError()),
    getHeaders: () => Promise.resolve({}),
    getMediaExtractor: () => Promise.reject(new ExtractorNotImplementedError()),
    getSearchExtractor: () =>
        Promise.reject(new ExtractorNotImplementedError()),
    getStreamExtractor: () =>
        Promise.reject(new ExtractorNotImplementedError()),
    isAlbum: () => Promise.resolve(false),
    isAuthor: () => Promise.resolve(false),
    isCategory: () => Promise.resolve(false),
    isMediaTrack: () => Promise.resolve(false),
    isDirectStream: () => Promise.resolve(false),
    isDescriptionStream: () => Promise.resolve(false),
    isSupported: () => Promise.resolve(false),
};

/**
 * Convenience factory for creating an `AnPlayerExtractor`.
 *
 * Pass only the methods your plugin implements. Every unspecified method
 * falls back to the safe default: extractor factories reject with
 * `ExtractorNotImplementedError`; `getHeaders` returns `{}`; all `is*`
 * classifiers return `false`.
 *
 * @param partialImplementation - An object containing the subset of
 *   `AnPlayerExtractor` return-type methods that this plugin supports.
 * @returns A fully-formed `AnPlayerExtractor` factory function ready to be
 *   exported as the plugin's default export.
 */
export function createAnPlayerExtractor(
    partialImplementation: Partial<typeof defaultImplementation>,
): AnPlayerExtractor {
    return () => {
        const implementation = {
            ...defaultImplementation,
            ...partialImplementation,
        };

        return {
            getAccountExtractor: implementation.getAccountExtractor,
            getAlbumExtractor: implementation.getAlbumExtractor,
            getAlbumsExtractor: implementation.getAlbumsExtractor,
            getAuthorExtractor: implementation.getAuthorExtractor,
            getAuthorsExtractor: implementation.getAuthorsExtractor,
            getAutocompleteExtractor: implementation.getAutocompleteExtractor,
            getCategoriesExtractor: implementation.getCategoriesExtractor,
            getCategoryExtractor: implementation.getCategoryExtractor,
            getFeedExtractor: implementation.getFeedExtractor,
            getHeaders: implementation.getHeaders,
            getMediaExtractor: implementation.getMediaExtractor,
            getSearchExtractor: implementation.getSearchExtractor,
            getStreamExtractor: implementation.getStreamExtractor,
            isAlbum: implementation.isAlbum,
            isAuthor: implementation.isAuthor,
            isCategory: implementation.isCategory,
            isMediaTrack: implementation.isMediaTrack,
            isDirectStream: implementation.isDirectStream,
            isDescriptionStream: implementation.isDescriptionStream,
            isSupported: implementation.isSupported,
        };
    };
}
