import { ContentType } from '../enum';

export type WebPlayerStream = Readonly<{
    uri: URL;
    type: ContentType;
}>;

export function createWebPlayerStream(
    stream: Omit<WebPlayerStream, 'type'>,
): WebPlayerStream {
    return {
        ...stream,
        type: ContentType.streamWebPlayer,
    };
}
