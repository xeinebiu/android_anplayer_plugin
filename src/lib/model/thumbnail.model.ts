import { ThumbnailSource } from './thumbnail-source.model';

export type Thumbnail = Readonly<{
    small?: ThumbnailSource;
    medium?: ThumbnailSource;
    large?: ThumbnailSource;
}>;
