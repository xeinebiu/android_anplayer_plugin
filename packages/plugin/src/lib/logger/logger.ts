export type ExtractorLogger = Readonly<{
    debug(message: string, error?: Error): void;
    info(message: string, error?: Error): void;
    log(message: string, error?: Error): void;
    warning(message: string, error?: Error): void;
    error(message: string, error?: Error): void;
}>;
