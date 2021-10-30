package com.xeinebiu.anplayer.plugin.media.extractor

import android.net.Uri
import com.xeinebiu.anplayer.plugin.media.extractor.exception.NotAuthenticatedServiceException
import com.xeinebiu.anplayer.plugin.media.extractor.exception.NotImplementedExtractorException
import com.xeinebiu.anplayer.plugin.media.extractor.extractor.AccountExtractor
import com.xeinebiu.anplayer.plugin.media.extractor.extractor.AlbumExtractor
import com.xeinebiu.anplayer.plugin.media.extractor.extractor.AuthorExtractor
import com.xeinebiu.anplayer.plugin.media.extractor.extractor.AutoCompleteExtractor
import com.xeinebiu.anplayer.plugin.media.extractor.extractor.CategoryExtractor
import com.xeinebiu.anplayer.plugin.media.extractor.extractor.FeedExtractor
import com.xeinebiu.anplayer.plugin.media.extractor.extractor.MediaTrackExtractor
import com.xeinebiu.anplayer.plugin.media.extractor.extractor.SearchExtractor
import com.xeinebiu.anplayer.plugin.media.extractor.model.Album
import com.xeinebiu.anplayer.plugin.media.extractor.model.Author
import com.xeinebiu.anplayer.plugin.media.extractor.model.Category
import com.xeinebiu.anplayer.plugin.media.extractor.model.MediaTrack
import com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor.AuthorDescriptor
import java.io.File
import java.net.CookieManager

/**
 * Base extractor for extracting media contents from different sources
 *
 * Provides a collection (set) of extractors
 */
abstract class MediaExtractor {

    private lateinit var mTempFolder: File

    val tempFolder: File
        get() = mTempFolder

    /**
     * User agent set for HTTPS Connections
     */
    abstract val userAgent: String

    /**
     * Initialize extractor
     */
    abstract fun init(cookieManager: CookieManager?, data: Map<String, String>?)

    /**
     * Returns an instance of [AccountExtractor] if the client is authenticated,
     * [NotAuthenticatedServiceException] is thrown otherwise
     */
    @Throws(NotAuthenticatedServiceException::class, NotImplementedExtractorException::class)
    abstract fun getAccountExtractor(): AccountExtractor

    /**
     * Returns an instance of [AlbumExtractor]
     */
    @Throws(NotImplementedExtractorException::class)
    abstract fun getAlbumExtractor(album: Uri): AlbumExtractor

    /**
     * Returns an instance of [AuthorExtractor]
     */
    @Throws(NotImplementedExtractorException::class)
    abstract fun getAuthorExtractor(author: Uri): AuthorExtractor

    /**
     * Returns an instance of [CategoryExtractor] for given [category]
     */
    @Throws(NotImplementedExtractorException::class)
    abstract fun getCategoryExtractor(category: Uri): CategoryExtractor

    /**
     * Returns an instance of [FeedExtractor]
     */
    @Throws(NotImplementedExtractorException::class)
    abstract fun getFeedExtractor(): FeedExtractor

    /**
     * Returns an instance of [MediaTrackExtractor]
     */
    @Throws(NotImplementedExtractorException::class)
    abstract fun getMediaTrackExtractor(track: Uri): MediaTrackExtractor

    /**
     * Returns an instance of [SearchExtractor]
     */
    @Throws(NotImplementedExtractorException::class)
    abstract fun getSearchExtractor(query: String): SearchExtractor

    /**
     * Returns an instance of [AutoCompleteExtractor]
     */
    @Throws(NotImplementedExtractorException::class)
    abstract fun getAutoCompleteExtractor(query: String): AutoCompleteExtractor

    /**
     * Return popular authors
     */
    abstract fun getTopAuthors(): List<AuthorDescriptor>

    /**
     * Returns collection of available categories
     */
    abstract fun getCategories(): List<Category>

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
