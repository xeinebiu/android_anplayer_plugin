package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaDescriptor

/**
 * Extractor to handle queries
 */
abstract class SearchExtractor(extractorCode: String) : Extractor<MediaDescriptor>(extractorCode) {

    /**
     * Returns collection of words which complete the given [query]
     */
    abstract fun getAutoCompletedWords(query: String): List<String>

    /**
     * Returns current query
     */
    abstract fun getQuery(): String?

    /**
     * Search for given [query] and returns its result
     */
    abstract fun search(query: String): List<MediaDescriptor>
}
