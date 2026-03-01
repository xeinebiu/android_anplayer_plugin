import { Extractor } from './extractor';
import { Category } from '../model';

/**
 * Extractor for the top-level category or genre listing of the source.
 *
 * Returned by `AnPlayerExtractor.getCategoriesExtractor()`. Each `Category`
 * yielded by `next()` can be passed to `getCategory​Extractor` to browse its
 * contents.
 */
export type CategoriesExtractor = Extractor<Category>;
