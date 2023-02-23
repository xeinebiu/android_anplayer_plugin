import { Uri } from '../type';

export type Stream = Readonly<{
    uri: Uri;
    headers?: Record<string, string>;
}>;
