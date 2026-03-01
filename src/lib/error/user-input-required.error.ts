/**
 * Thrown when a resource cannot be fetched without first completing a
 * browser-based interaction — typically a CAPTCHA, an OAuth consent screen,
 * or a cookie-based age-gate.
 *
 * AN Player will open `uri` in an embedded WebView, wait for the interaction
 * to complete, and then retry the request using the resulting cookies or
 * tokens supplied via `headers`.
 */
export class UserInputRequiredError extends Error {
    /**
     * @param uri     - The URL to open in the embedded WebView so the user
     *   can complete the required interaction.
     * @param headers - HTTP headers (e.g. cookies or auth tokens) that the
     *   plugin needs after the WebView interaction completes and that AN
     *   Player should pass back on retry.
     */
    constructor(
        public readonly uri: URL,
        public readonly headers: Record<string, string>,
    ) {
        super('');
    }
}
