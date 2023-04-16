import { Extractor } from './extractor';
import { Author, AuthorDetail } from '../model';

export type AuthorsExtractor = Extractor<Author | AuthorDetail>;
