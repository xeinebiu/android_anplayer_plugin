import { Extractor } from './extractor';
import { Album, AlbumDetail } from '../model';

export type AlbumsExtractor = Extractor<Album | AlbumDetail>;
