package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.Author
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaDescriptor

/**
 * Extractor for a single Author
 */
abstract class AuthorExtractor(extractorCode: String) : Extractor<MediaDescriptor>(extractorCode) {
    /**
     * Returns the author
     */
    abstract fun getAuthor(): Author
}
