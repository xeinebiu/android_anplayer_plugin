export class UserInputRequiredError extends Error {
    constructor(
        public readonly uri: URL,
        public readonly headers: Record<string, string>,
    ) {
        super('');
    }
}
