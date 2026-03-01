import { ContentType } from '../enum';

/**
 * A browseable content category, genre, or section within a source.
 *
 * Can represent:
 * - A genre (e.g. "Action", "Jazz", "Documentary")
 * - A editorial section (e.g. "Trending", "New Releases", "Top Charts")
 * - Any other named grouping used by the source to organise its catalogue
 *
 * Pass `Category.uri` to `AnPlayerExtractor.getCategoryExtractor()` to
 * browse the items listed under this category.
 */
export type Category = Readonly<{
    /** Display name of the category (e.g. `"Action"`, `"New Releases"`). */
    name: string;
    /** Canonical URI used to load the category's contents. */
    uri: URL;
    /** Discriminant tag — always `ContentType.category`. */
    type: ContentType.category;
}>;

export function createCategory(category: Omit<Category, 'type'>): Category {
    return {
        ...category,
        type: ContentType.category,
    };
}
