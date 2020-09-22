package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AlbumDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AuthorDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaTrackDescriptor

abstract class AccountFollowingAuthorsExtractor(extractorCode: String) :
    Extractor<AuthorDescriptor>(extractorCode)

abstract class AccountHistoryExtractor(extractorCode: String) :
    Extractor<MediaDescriptor>(extractorCode)

abstract class AccountAlbumsExtractor(extractorCode: String) :
    Extractor<AlbumDescriptor>(extractorCode)

abstract class AccountSubscribedTracksExtractor(extractorCode: String) :
    Extractor<MediaTrackDescriptor>(extractorCode)

/**
 * Extractor for current authenticated account
 */
abstract class AccountExtractor(extractorCode: String) : Extractor<MediaDescriptor>(extractorCode) {

    /**
     * Returns extractor for following authors
     */
    abstract fun getFollowingExtractor(): AccountFollowingAuthorsExtractor

    /**
     * Returns account history extractor
     */
    abstract fun getHistoryExtractor(): AccountHistoryExtractor

    /**
     * Returns account albums extractor
     */
    abstract fun getAlbumsExtractor(): AccountAlbumsExtractor

    /**
     * Returns subscribed tracks extractor
     */
    abstract fun getSubscribedTracksExtractor(): AccountSubscribedTracksExtractor
}
