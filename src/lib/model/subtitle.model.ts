export type Subtitle = Readonly<{
    displayLanguageName: string;
    uri: URL;
    headers?: Record<string, string>;
    locale: string;
    mimeType?: string;
}>;
