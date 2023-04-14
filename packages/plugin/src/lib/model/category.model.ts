import { ContentType } from '../enum';

export type Category = Readonly<{
    id: string;
    name: string;
    uri: URL;
    type: ContentType.category;
}>;

export function createCategory(category: Omit<Category, 'type'>): Category {
    return {
        ...category,
        type: ContentType.category,
    };
}
