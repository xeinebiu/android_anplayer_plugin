export class CategoryNotFoundError extends Error {
    constructor(public readonly category: URL) {
        super(category.toString());
    }
}
