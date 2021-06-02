package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.exception.NotImplementedExtractorException
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AlbumDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AuthorDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaTrackDescriptor

/**
 * Extracts all authors followed by logged in account
 */
abstract class AccountFollowingAuthorsExtractor : Extractor<AuthorDescriptor>()

/**
 * Extracts the history of logged in account
 */
abstract class AccountHistoryExtractor : Extractor<MediaDescriptor>()

/**
 * Extract Albums of logged in account
 */
abstract class AccountAlbumsExtractor : Extractor<AlbumDescriptor>()

/**
 * Extracts contents from followed authors by logged in account
 */
abstract class AccountSubscribedTracksExtractor : Extractor<MediaTrackDescriptor>()

/**
 * Extractor for specific account
 */
abstract class AccountExtractor : Extractor<MediaDescriptor>() {

    /**
     * Returns extractor for following authors
     */
    @Throws(NotImplementedExtractorException::class)
    abstract fun getFollowingExtractor(): AccountFollowingAuthorsExtractor

    /**
     * Returns account history extractor
     */
    @Throws(NotImplementedExtractorException::class)
    abstract fun getHistoryExtractor(): AccountHistoryExtractor

    /**
     * Returns account albums extractor
     */
    @Throws(NotImplementedExtractorException::class)
    abstract fun getAlbumsExtractor(): AccountAlbumsExtractor

    /**
     * Returns subscribed tracks extractor
     */
    @Throws(NotImplementedExtractorException::class)
    abstract fun getSubscribedTracksExtractor(): AccountSubscribedTracksExtractor
}
