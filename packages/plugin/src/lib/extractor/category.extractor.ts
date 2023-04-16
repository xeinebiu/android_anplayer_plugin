import { Extractor } from './extractor';
import { Album, AlbumDetail, Media, MediaDetail } from '../model';

export type CategoryExtractor = Extractor<
    Media | Album | MediaDetail | AlbumDetail
>;
