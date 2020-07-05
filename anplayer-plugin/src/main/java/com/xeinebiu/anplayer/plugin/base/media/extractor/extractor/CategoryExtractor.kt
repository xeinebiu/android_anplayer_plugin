package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.ExtractorCodeDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaDescriptor

abstract class CategoryExtractor(extractorCode: String) : ExtractorCodeDescriptor(extractorCode) {
    /**
     * Returns first page content
     */
    abstract fun getFirstPage(): List<MediaDescriptor>

    /**
     * Returns next page content
     */
    abstract fun getNextPage(): List<MediaDescriptor>

    /**
     * Returns `true` if there is a next page available, `false` otherwise
     */
    abstract fun hasNextPage(): Boolean
}