import { Extractor } from './extractor';

export abstract class AutocompleteExtractor extends Extractor<string> {
    abstract getQuery(): string | undefined;
}
