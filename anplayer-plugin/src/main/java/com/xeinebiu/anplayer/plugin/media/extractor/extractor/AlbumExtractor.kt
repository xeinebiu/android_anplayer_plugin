package com.xeinebiu.anplayer.plugin.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.media.extractor.exception.AlbumNotFoundException
import com.xeinebiu.anplayer.plugin.media.extractor.model.Album
import com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor.MediaDescriptor

/**
 * Extractor for a single Album
 */
abstract class AlbumExtractor : Extractor<MediaDescriptor>() {

    /**
     * Returns the album
     */
    @Throws(AlbumNotFoundException::class)
    abstract fun getAlbum(): Album
}
