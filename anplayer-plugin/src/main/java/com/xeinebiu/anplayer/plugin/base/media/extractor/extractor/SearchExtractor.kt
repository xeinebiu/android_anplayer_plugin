package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.ExtractorCodeDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaDescriptor

abstract class SearchExtractor(extractorCode: String) : ExtractorCodeDescriptor(extractorCode) {

    /**
     * Returns collection of words which complete the given [query]
     */
    abstract fun getAutoCompletedWords(query: String): List<String>

    /**
     * Returns next page content
     */
    abstract fun getNextPage(): List<MediaDescriptor>

    /**
     * Returns current query
     */
    abstract fun getQuery(): String?

    /**
     * Returns `true` if there is a next page available, `false` otherwise
     */
    abstract fun hasNextPage(): Boolean

    /**
     * Search for given [query] and returns its result
     */
    abstract fun search(query: String): List<MediaDescriptor>
}
