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
 * Extractor for the source's home or discovery feed.
 *
 * Returned by `AnPlayerExtractor.getFeedExtractor()`. The feed is typically
 * the first thing a user sees when opening the plugin — it may contain a mix
 * of trending media, featured albums, spotlighted authors, and editorial
 * picks.
 *
 * No query is associated with a feed; it represents the source's default
 * content surface.
 */
export type FeedExtractor = Extractor<
    Author | Media | Album | AuthorDetail | MediaDetail | AlbumDetail
>;
