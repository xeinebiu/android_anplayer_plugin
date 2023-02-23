import { MediaFormat } from '../enum';
import { Uri } from '../type';

export type Subtitle = Readonly<{
    displayLanguageName: string;
    format: MediaFormat;
    uri: Uri;
    headers?: Record<string, string>;
    locale: string;
}>;
