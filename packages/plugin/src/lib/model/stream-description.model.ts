import { ContentType } from '../enum';

export type StreamDescription = Readonly<{
    name?: string;
    description?: string;
    uri: URL;
    headers?: Record<string, string>;
    type: ContentType;
}>;

export function createStreamDescription(
    stream: Omit<StreamDescription, 'type'>,
): StreamDescription {
    return {
        ...stream,
        type: ContentType.streamDescription,
    };
}
