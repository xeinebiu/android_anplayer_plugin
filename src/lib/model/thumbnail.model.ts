import { ThumbnailSizes } from './thumbnail-sizes.model';

export type Thumbnail = Readonly<{
    portrait?: ThumbnailSizes;
    landscape?: ThumbnailSizes;
}>;
