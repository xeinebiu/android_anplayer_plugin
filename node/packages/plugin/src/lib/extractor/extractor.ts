export abstract class Extractor<T> {
    public abstract next(): Promise<T[]>;
}
