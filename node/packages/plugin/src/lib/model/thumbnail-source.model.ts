import { Uri } from '../type';

export type ThumbnailSource = Readonly<{
    uri: Uri;
    headers?: Record<string, string>;
}>;
