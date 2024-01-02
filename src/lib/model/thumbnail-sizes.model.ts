import { ThumbnailSource } from './thumbnail-source.model';

export type ThumbnailSizes = Readonly<{
    small?: ThumbnailSource;
    medium?: ThumbnailSource;
    large?: ThumbnailSource;
}>;
