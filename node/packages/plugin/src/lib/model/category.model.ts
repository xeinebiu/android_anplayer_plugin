import { Uri } from '../type';

export type Category = Readonly<{
    id: string;
    name: string;
    uri: Uri;
}>;
