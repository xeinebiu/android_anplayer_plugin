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
import { Uri } from './type';
import { Author, Category } from './model';

export abstract class AnplayerExtractor {
    constructor(
        private readonly temporaryFolderPath: string,
        private readonly config: Record<string, string>,
    ) {}

    public abstract getAccountExtractor(): Promise<AccountExtractor>;

    public abstract getAlbumExtractor(album: Uri): Promise<AlbumExtractor>;

    public abstract getAuthorExtractor(author: Uri): Promise<AuthorExtractor>;

    public abstract getMediaExtractor(media: Uri): Promise<MediaExtractor>;

    public abstract getCategoryExtractor(
        category: Uri,
    ): Promise<CategoryExtractor>;

    public abstract getSearchExtractor(query: string): Promise<SearchExtractor>;

    public abstract getAutocompleteExtractor(
        query: string,
    ): Promise<AutocompleteExtractor>;

    public abstract getCategories(): Promise<Category[]>;

    public abstract getAuthors(): Promise<Author[]>;

    public abstract getFeedExtractor(): Promise<FeedExtractor>;

    public abstract getHeaders(uri: Uri): Promise<Record<string, string>>;

    public abstract isSupported(uri: Uri): Promise<boolean>;

    public abstract isSupported(uri: Uri): Promise<boolean>;

    public abstract isMediaTrack(uri: Uri): Promise<boolean>;

    public abstract isAlbum(uri: Uri): Promise<boolean>;

    public abstract isAuthor(uri: Uri): Promise<boolean>;

    public abstract isCategory(uri: Uri): Promise<boolean>;
}
