export type Extractor<Next, Body = unknown> = Body & {
    next(): Promise<Array<Next>>;
};
