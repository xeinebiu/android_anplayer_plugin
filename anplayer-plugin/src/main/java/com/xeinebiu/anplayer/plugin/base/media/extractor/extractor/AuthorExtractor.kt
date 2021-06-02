package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.exception.AuthorNotFoundException
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.Author
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaDescriptor

/**
 * Extractor for a single Author
 */
abstract class AuthorExtractor : Extractor<MediaDescriptor>() {

    /**
     * Returns the author
     */
    @Throws(AuthorNotFoundException::class)
    abstract fun getAuthor(): Author
}
