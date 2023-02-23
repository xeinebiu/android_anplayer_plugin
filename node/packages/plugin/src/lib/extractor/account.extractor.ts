import { Extractor } from './extractor';
import { Album, Author, Media } from '../model';

export abstract class AccountExtractor extends Extractor<
    Media | Album | Author
> {
    public abstract getAlbumExtractor(): Promise<Extractor<Album>>;

    public abstract getHistoryExtractor(): Promise<Extractor<Media>>;

    public abstract getPersonalisedMediaExtractor(): Promise<Extractor<Media>>;

    public abstract getSubscribedAuthorExtractor(): Promise<Extractor<Author>>;
}
