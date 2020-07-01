package com.xeinebiu.anplayer.plugin.base.media.extractor

import android.net.Uri
import com.xeinebiu.anplayer.plugin.base.media.extractor.exception.NotAuthenticatedServiceException
import com.xeinebiu.anplayer.plugin.base.media.extractor.extractor.*
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.Album
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.Author
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.MediaTrack
import java.net.CookieManager

/**
 * Base extractor for extracting media contents from different sources
 *
 * Provides a collection (set) of extractors
 */
abstract class MediaExtractor {

    @JvmField
    var mExtractorCode = ""

    val extractorCode: String
        get() = mExtractorCode

    /**
     * Initialize extractor
     */
    abstract fun init(cookieManager: CookieManager?, data: HashMap<String, String>?)

    /**
     * Returns an instance of [AccountExtractor] if the client is authenticated,
     * [NotAuthenticatedServiceException] is thrown otherwise
     */
    @Throws(NotAuthenticatedServiceException::class)
    abstract fun getAccountExtractor(): AccountExtractor

    /**
     * Returns an instance of [AlbumExtractor]
     */
    abstract fun getAlbumExtractor(album: Uri): AlbumExtractor

    /**
     * Returns an instance of [AuthorExtractor]
     */
    abstract fun getAuthorExtractor(author: Uri): AuthorExtractor

    /**
     * Returns an instance of [FeedExtractor]
     */
    abstract fun getFeedExtractor(): FeedExtractor

    /**
     * Returns an instance of [MediaTrackExtractor]
     */
    abstract fun getMediaTrackExtractor(track: Uri): MediaTrackExtractor

    /**
     * Returns an instance of [SearchExtractor]
     */
    abstract fun getSearchExtractor(): SearchExtractor

    /**
     * Returns `true` if the given [uri] can be handled, `false` otherwise
     */
    abstract fun isSupported(uri: Uri): Boolean

    /**
     * Returns `true` if the given [uri] is a [MediaTrack], `false` otherwise
     */
    abstract fun isMediaTrack(uri: Uri): Boolean

    /**
     * Returns `true` if the given [uri] is an [Album], `false` otherwise
     */
    abstract fun isAlbum(uri: Uri): Boolean

    /**
     * Returns `true` if the given [uri] is an [Author], `false` otherwise
     */
    abstract fun isAuthor(uri: Uri): Boolean
}
