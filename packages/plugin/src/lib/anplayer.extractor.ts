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

export type AnPlayerExtractor = (args: {
    temporaryFolderPath: string;
    config: string;
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
