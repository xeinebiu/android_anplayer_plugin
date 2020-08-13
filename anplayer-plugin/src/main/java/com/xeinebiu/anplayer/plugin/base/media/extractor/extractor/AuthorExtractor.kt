package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.AlbumCollection
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.Author

/**
 * Extractor for a single Author
 */
abstract class AuthorExtractor(extractorCode: String) : Extractor<AlbumCollection>(extractorCode) {
    /**
     * Returns the author
     */
    abstract fun getAuthor(): Author
}
