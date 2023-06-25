import { ContentType } from '../enum';

export type Stream = Readonly<{
    name?: string;
    description?: string;
    uri: URL;
    headers?: Record<string, string>;
    type: ContentType;
}>;

export function createDirectStream(stream: Omit<Stream, 'type'>): Stream {
    return {
        ...stream,
        type: ContentType.streamDirect,
    };
}

export function createDescriptionStream(stream: Omit<Stream, 'type'>): Stream {
    return {
        ...stream,
        type: ContentType.streamDescription,
    };
}
