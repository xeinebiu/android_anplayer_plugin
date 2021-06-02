package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.exception.AlbumNotFoundException
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.Album
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaDescriptor

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
