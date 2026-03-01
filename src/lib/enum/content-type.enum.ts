/**
 * Discriminant tags used on every model type in this library.
 *
 * AN Player reads the `type` field to determine how to render or route a
 * value returned by a plugin extractor. Every model carries exactly one of
 * these values as a `readonly type`.
 */
export enum ContentType {
    /** A single playable item in a list or grid view. */
    media = 'media',
    /** Full detail record for a single playable item. */
    mediaDetail = 'media_detail',
    /** A person, group, or organisation in a list or grid view. */
    author = 'author',
    /** Full detail record for a person, group, or organisation. */
    authorDetail = 'author_detail',
    /** A collection of media items in a list or grid view. */
    album = 'album',
    /** Full detail record for a collection of media items. */
    albumDetail = 'album_detail',
    /** A browseable content category or genre. */
    category = 'category',
    /** A user-submitted comment on a media item. */
    comment = 'comment',
    /** A raw, directly playable stream URL. */
    streamDirect = 'stream_direct',
    /** A manifest or container URL that must be resolved to find streams. */
    streamDescription = 'stream_description',
    /** A URL that must be opened in an embedded web player. */
    streamWebPlayer = 'stream_web_player',
}
