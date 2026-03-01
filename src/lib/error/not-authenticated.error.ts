/**
 * Thrown when an extractor method requires a valid user session but none is
 * present or the session has expired.
 *
 * Plugins should throw this error instead of returning empty results so that
 * AN Player can prompt the user to sign in.
 */
export class NotAuthenticatedError extends Error {
    /**
     * @param message - Human-readable explanation, e.g. `"Login required to
     *   access your watch history"`. Shown to the user by AN Player.
     */
    constructor(message: string) {
        super(message);
    }
}
