import { Extractor } from './extractor';

/**
 * Extractor for search autocomplete suggestions.
 *
 * Returned by `AnPlayerExtractor.getAutocompleteExtractor(query)`. Each
 * string yielded by `next()` is a suggested search term to display in the
 * search bar dropdown as the user types.
 */
export type AutocompleteExtractor = Extractor<
    string,
    {
        /**
         * Returns the query string that was used to generate these suggestions.
         */
        getQuery(): string;
    }
>;
