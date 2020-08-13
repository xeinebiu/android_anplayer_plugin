package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AlbumDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AuthorDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaTrackDescriptor

/**
 * Extractor for current authenticated account
 */
abstract class AccountExtractor(extractorCode: String) : Extractor<MediaDescriptor>(extractorCode) {

    /**
     * Returns first page content of following authors
     */
    abstract fun getFollowingAuthorsFirstPage(): List<AuthorDescriptor>

    /**
     * Returns next page content of following authors
     */
    abstract fun getFollowingAuthorsNextPage(): List<AuthorDescriptor>

    /**
     * Returns first page content of tracks history
     */
    abstract fun getHistoryTracksFirstPage(): List<MediaTrackDescriptor>

    /**
     * Returns next page content of tracks history
     */
    abstract fun getHistoryTracksNextPage(): List<MediaTrackDescriptor>

    /**
     * Returns first page content of saved albums
     */
    abstract fun getSavedAlbumsFirstPage(): List<AlbumDescriptor>

    /**
     * Returns next page content of saved albums
     */
    abstract fun getSavedAlbumsNextPage(): List<AlbumDescriptor>

    /**
     * Returns first page content of subscribed tracks
     */
    abstract fun getSubscribedTracksFirstPage(): List<MediaTrackDescriptor>

    /**
     * Returns next page content of subscribed tracks
     */
    abstract fun getSubscribedTracksNextPage(): List<MediaTrackDescriptor>

    /**
     * Returns `true` if there is a next page available of subscribed|following authors, `false` otherwise
     */
    abstract fun hasFollowingAuthorsNextPage(): Boolean

    /**
     * Returns `true` if there is a next page available of history tracks, `false` otherwise
     */
    abstract fun hasHistoryTracksNextPage(): Boolean

    /**
     * Returns `true` if there is a next page available of saved albums, `false` otherwise
     */
    abstract fun hasSavedAlbumsNextPage(): Boolean

    /**
     * Returns `true` if there is a next page available of subscribed tracks, `false` otherwise
     */
    abstract fun hasSubscribedTracksNextPage(): Boolean
}
