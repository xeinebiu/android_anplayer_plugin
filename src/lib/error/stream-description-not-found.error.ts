/**
 * Thrown by `StreamExtractor.getStreamDescription()` when a manifest or
 * container URI cannot be resolved (e.g. a geo-blocked HLS manifest, an
 * expired signed URL, or an unsupported DRM scheme).
 */
export class StreamDescriptionNotFoundError extends Error {
    /**
     * @param streamDescription - The URI of the stream description that could
     *   not be resolved. Used as the error message so the URI is visible in
     *   stack traces and logs.
     */
    constructor(public readonly streamDescription: URL) {
        super(streamDescription.toString());
    }
}
