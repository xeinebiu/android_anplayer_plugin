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

export type AnPlayerExtractor = (args: {
    temporaryFolderPath: string;
    config: string;
    logger: ExtractorLogger;
}) => {
    getAccountExtractor(): Promise<AccountExtractor>;

    getAlbumExtractor(album: URL): Promise<AlbumExtractor>;

    getAlbumsExtractor(query?: string): Promise<AlbumsExtractor>;

    getAuthorExtractor(author: URL): Promise<AuthorExtractor>;

    getAuthorsExtractor(query?: string): Promise<AuthorsExtractor>;

    getAutocompleteExtractor(query: string): Promise<AutocompleteExtractor>;

    getCategoriesExtractor(): Promise<CategoriesExtractor>;

    getCategoryExtractor(category: URL): Promise<CategoryExtractor>;

    getFeedExtractor(): Promise<FeedExtractor>;

    getHeaders(uri: URL): Promise<Record<string, string>>;

    getMediaExtractor(media: URL): Promise<MediaExtractor>;

    getSearchExtractor(query: string): Promise<SearchExtractor>;

    getStreamExtractor(): Promise<StreamExtractor>;

    isAlbum(uri: URL): Promise<boolean>;

    isAuthor(uri: URL): Promise<boolean>;

    isCategory(uri: URL): Promise<boolean>;

    isMediaTrack(uri: URL): Promise<boolean>;

    isDirectStream(uri: URL): Promise<boolean>;

    isDescriptionStream(uri: URL): Promise<boolean>;

    isSupported(uri: URL): Promise<boolean>;
};

const defaultImplementation = {
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
    getHeaders: () => Promise.reject(new ExtractorNotImplementedError()),
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

export function createAnPlayerExtractor(
    partialImplementation: Partial<AnPlayerExtractor>,
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
