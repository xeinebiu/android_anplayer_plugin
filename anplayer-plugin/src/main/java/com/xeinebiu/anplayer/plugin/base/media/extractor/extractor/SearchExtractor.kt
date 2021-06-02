package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaDescriptor

/**
 * Extractor to handle queries
 */
abstract class SearchExtractor : Extractor<MediaDescriptor>() {

    /**
     * Returns current query
     */
    abstract fun getQuery(): String?
}
