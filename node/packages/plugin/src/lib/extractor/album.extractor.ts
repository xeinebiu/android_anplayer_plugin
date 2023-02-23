import { Extractor } from './extractor';
import { AlbumDetail, Media } from '../model';

export abstract class AlbumExtractor extends Extractor<Media> {
    abstract getAlbum(): Promise<AlbumDetail>;
}
