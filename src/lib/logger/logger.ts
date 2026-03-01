/**
 * Logging interface injected into every plugin extractor by AN Player.
 *
 * Use this instead of `console.*` so that log output is captured by AN
 * Player's logging infrastructure and can be viewed in the in-app log viewer
 * or exported for debugging.
 *
 * Severity levels follow standard conventions — use the lowest level that
 * accurately describes the message:
 * - `debug` → verbose internal state, disabled in production builds
 * - `info` / `log` → informational lifecycle messages
 * - `warning` → recoverable unexpected situations
 * - `error` → failures that affect plugin behaviour
 */
export type ExtractorLogger = Readonly<{
    /**
     * Logs a verbose debug message. Typically only visible in debug builds or
     * when debug logging is explicitly enabled.
     *
     * @param message - Human-readable description of the event.
     * @param error   - Optional associated error for additional context.
     */
    debug(message: string, error?: Error): void;

    /**
     * Logs an informational message about normal plugin operation
     * (e.g. `"Fetching feed page 2"`).
     *
     * @param message - Human-readable description of the event.
     * @param error   - Optional associated error for additional context.
     */
    info(message: string, error?: Error): void;

    /**
     * Alias for `info`. Logs a general-purpose message.
     *
     * @param message - Human-readable description of the event.
     * @param error   - Optional associated error for additional context.
     */
    log(message: string, error?: Error): void;

    /**
     * Logs a warning about a recoverable unexpected situation (e.g. a
     * missing optional field or a non-critical network retry).
     *
     * @param message - Human-readable description of the situation.
     * @param error   - Optional associated error for additional context.
     */
    warning(message: string, error?: Error): void;

    /**
     * Logs an error that has affected plugin behaviour (e.g. a failed
     * network request, a parse failure, or an unexpected API response).
     *
     * @param message - Human-readable description of what went wrong.
     * @param error   - Optional associated error (stack trace will be
     *   included in the log output).
     */
    error(message: string, error?: Error): void;
}>;
