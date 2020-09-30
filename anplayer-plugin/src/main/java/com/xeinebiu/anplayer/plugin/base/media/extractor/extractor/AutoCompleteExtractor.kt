package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

/**
 * Extractor to handle queries
 */
abstract class AutoCompleteExtractor(extractorCode: String) : Extractor<String>(extractorCode) {
    /**
     * Returns current query
     */
    abstract fun getQuery(): String?
}
