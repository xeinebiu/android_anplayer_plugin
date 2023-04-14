import { Extractor } from './extractor';
import { Album, Author, Media } from '../model';

export type AccountExtractor = Extractor<
    Media | Album | Author,
    {
        getAlbumExtractor(): Promise<Extractor<Album>>;

        getHistoryExtractor(): Promise<Extractor<Media>>;

        getPersonalisedMediaExtractor(): Promise<Extractor<Media>>;

        getSubscribedAuthorExtractor(): Promise<Extractor<Author>>;
    }
>;
