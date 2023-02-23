import { Uri } from '../type';

export class UserInputRequiredError extends Error {
    constructor(
        public readonly uri: Uri,
        public readonly headers: Record<string, string>,
    ) {
        super('');
    }
}
