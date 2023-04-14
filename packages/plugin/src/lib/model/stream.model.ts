export type Stream = Readonly<{
    uri: URL;
    headers?: Record<string, string>;
}>;
