import { MediaFormat } from '../enum';

export type Subtitle = Readonly<{
    displayLanguageName: string;
    format: MediaFormat;
    uri: URL;
    headers?: Record<string, string>;
    locale: string;
}>;
