import { Extractor } from './extractor';

export type AutocompleteExtractor = Extractor<string, { getQuery(): string }>;
