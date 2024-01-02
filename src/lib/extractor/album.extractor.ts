import { Extractor } from './extractor';
import { Album, AlbumDetail, Media } from '../model';

export type AlbumExtractor = Extractor<
    Media | Album,
    { getAlbum(): Promise<AlbumDetail> }
>;
