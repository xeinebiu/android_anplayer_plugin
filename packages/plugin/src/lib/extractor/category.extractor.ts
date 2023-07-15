import { Extractor } from './extractor';
import { Album, AlbumDetail, Category, Media, MediaDetail } from '../model';

export type CategoryExtractor = Extractor<
    Media | Album | MediaDetail | AlbumDetail,
    { getCategory(): Promise<Category> }
>;
