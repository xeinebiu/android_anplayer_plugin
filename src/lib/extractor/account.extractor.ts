import { Extractor } from './extractor';
import {
    Album,
    AlbumDetail,
    Author,
    AuthorDetail,
    Media,
    MediaDetail,
} from '../model';

/**
 * Extractor for authenticated account content.
 *
 * Returned by `AnPlayerExtractor.getAccountExtractor()`. The root `next()`
 * method yields a mixed list of content items associated with the signed-in
 * user (e.g. a dashboard or account overview page).
 *
 * Throw `NotAuthenticatedError` if no valid session is available.
 */
export type AccountExtractor = Extractor<
    Media | Album | Author | MediaDetail | AlbumDetail | AuthorDetail,
    {
        /**
         * Returns an extractor for the user's saved albums, playlists, or
         * subscribed collections.
         */
        getAlbumExtractor(): Promise<Extractor<Album | AlbumDetail>>;

        /**
         * Returns an extractor for the user's watch / play history.
         */
        getHistoryExtractor(): Promise<Extractor<Media | MediaDetail>>;

        /**
         * Returns an extractor for personalised media recommendations based on
         * the user's viewing or listening history.
         */
        getPersonalisedMediaExtractor(): Promise<
            Extractor<Media | MediaDetail>
        >;

        /**
         * Returns an extractor for the channels, artists, or creators the user
         * is subscribed to or follows.
         */
        getSubscribedAuthorExtractor(): Promise<
            Extractor<Author | AuthorDetail>
        >;
    }
>;
