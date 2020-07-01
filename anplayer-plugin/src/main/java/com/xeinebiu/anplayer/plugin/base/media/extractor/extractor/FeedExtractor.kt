package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.ExtractorCodeDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaTrackDescriptor

/**
 * Extractor for Home|Trending
 */
abstract class FeedExtractor(extractorCode: String) : ExtractorCodeDescriptor(extractorCode) {
    /**
     * Returns first page content for Home
     */
    abstract fun getHomeMediaTracksFirstPage(): List<MediaTrackDescriptor>

    /**
     * Returns next page content for Home
     */
    abstract fun getHomeMediaTracksNextPage(): List<MediaTrackDescriptor>

    /**
     * Returns first page content for Trending
     */
    abstract fun getTrendingMediaTracksFirstPage(): List<MediaTrackDescriptor>

    /**
     * Returns next page content for Trending
     */
    abstract fun getTrendingMediaTracksNextPage(): List<MediaTrackDescriptor>

    /**
     * Returns `true` if there is a next page available for home, `false` otherwise
     */
    abstract fun hasHomeNextPage(): Boolean

    /**
     * Returns `true` if there is a next page available for trending, `false` otherwise
     */
    abstract fun hasTrendingNextPage(): Boolean
}
