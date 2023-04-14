import {
    AccountExtractor,
    AlbumExtractor,
    AuthorExtractor,
    AutocompleteExtractor,
    CategoryExtractor,
    FeedExtractor,
    MediaExtractor,
    SearchExtractor,
} from './extractor';
import { Author, Category } from './model';

export type AnPlayerExtractor = (args: {
    temporaryFolderPath: string;
    config: Record<string, string>;
}) => {
    getAccountExtractor(): Promise<AccountExtractor>;

    getAlbumExtractor(album: URL): Promise<AlbumExtractor>;

    getAuthorExtractor(author: URL): Promise<AuthorExtractor>;

    getMediaExtractor(media: URL): Promise<MediaExtractor>;

    getCategoryExtractor(category: URL): Promise<CategoryExtractor>;

    getSearchExtractor(query: string): Promise<SearchExtractor>;

    getAutocompleteExtractor(query: string): Promise<AutocompleteExtractor>;

    getCategories(): Promise<Category[]>;

    getAuthors(): Promise<Author[]>;

    getFeedExtractor(): Promise<FeedExtractor>;

    getHeaders(uri: URL): Promise<Record<string, string>>;

    isSupported(uri: URL): Promise<boolean>;

    isMediaTrack(uri: URL): Promise<boolean>;

    isAlbum(uri: URL): Promise<boolean>;

    isAuthor(uri: URL): Promise<boolean>;

    isCategory(uri: URL): Promise<boolean>;
};
