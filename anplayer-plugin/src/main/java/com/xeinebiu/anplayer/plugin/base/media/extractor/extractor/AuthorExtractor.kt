package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.AlbumCollection
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.Author
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.ExtractorCodeDescriptor

/**
 * Extractor for a single Author
 */
abstract class AuthorExtractor(extractorCode: String) : ExtractorCodeDescriptor(extractorCode) {

    /**
     * Returns the first page content of Albums
     */
    abstract fun getAlbumsFirstPage(): List<AlbumCollection>

    /**
     * Returns the next page content of Albums
     */
    abstract fun getAlbumsNextPage(): List<AlbumCollection>

    /**
     * Returns the author
     */
    abstract fun getAuthor(): Author

    /**
     * Returns `true` if there is a next page available of albums, `false` otherwise
     */
    abstract fun hasNextPage(): Boolean
}
