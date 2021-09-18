package com.xeinebiu.anplayer.plugin.media.extractor.extractor

/**
 * Extractor to handle queries
 */
abstract class AutoCompleteExtractor : Extractor<String>() {

    /**
     * Returns the current query
     */
    abstract fun getQuery(): String?
}