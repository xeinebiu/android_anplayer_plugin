import { Extractor } from './extractor';
import { AlbumDetail, Media } from '../model';

export type AlbumExtractor = Extractor<
    Media,
    { getAlbum(): Promise<AlbumDetail> }
>;
