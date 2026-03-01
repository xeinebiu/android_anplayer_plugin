/**
 * Thrown when AN Player calls an extractor method that the plugin has not
 * implemented.
 *
 * `createAnPlayerExtractor` registers this as the default rejection for every
 * optional extractor factory. Plugins only need to override the capabilities
 * they actually support; AN Player inspects the `is*` classification methods
 * and the availability of each extractor to decide which features to expose
 * in the UI.
 */
export class ExtractorNotImplementedError extends Error {
    constructor() {
        super('');
    }
}
