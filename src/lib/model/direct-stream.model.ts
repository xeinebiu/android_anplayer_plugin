import { ContentType } from '../enum';

export type DirectStream = Readonly<{
    uri: URL;
    headers?: Record<string, string>;
    type: ContentType;
    mimeType?: string;
}>;

export function createDirectStream(
    stream: Omit<DirectStream, 'type'>,
): DirectStream {
    return {
        ...stream,
        type: ContentType.streamDirect,
    };
}
