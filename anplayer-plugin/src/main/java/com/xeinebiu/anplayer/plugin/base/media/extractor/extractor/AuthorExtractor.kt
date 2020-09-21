package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.MediaCollection
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.Author

/**
 * Extractor for a single Author
 */
abstract class AuthorExtractor(extractorCode: String) : Extractor<MediaCollection>(extractorCode) {
    /**
     * Returns the author
     */
    abstract fun getAuthor(): Author
}
