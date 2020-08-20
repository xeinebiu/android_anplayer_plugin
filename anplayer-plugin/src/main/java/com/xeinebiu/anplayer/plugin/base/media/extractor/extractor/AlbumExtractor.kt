package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.Album
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaDescriptor

/**
 * Extractor for a single Album
 */
abstract class AlbumExtractor(extractorCode: String) : Extractor<MediaDescriptor>(extractorCode) {
    /**
     * Returns the album
     */
    abstract fun getAlbum(): Album
}
