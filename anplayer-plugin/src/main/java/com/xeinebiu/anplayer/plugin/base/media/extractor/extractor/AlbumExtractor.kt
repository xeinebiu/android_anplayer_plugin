package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.Album
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.ExtractorCodeDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaDescriptor

/**
 * Extractor for a single Album
 */
abstract class AlbumExtractor(extractorCode: String) : ExtractorCodeDescriptor(extractorCode) {

    /**
     * Returns the album
     */
    abstract fun getAlbum(): Album

    /**
     * Returns the first page content of tracks
     */
    abstract fun getContentsFirstPage(): List<MediaDescriptor>

    /**
     * Returns next page content of tracks
     */
    abstract fun getContentsNextPage(): List<MediaDescriptor>

    /**
     * Returns `true` if there is a next page available of tracks, `false` otherwise
     */
    abstract fun hasNextPage(): Boolean
}
