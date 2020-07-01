package com.xeinebiu.anplayer.plugin.base.media.extractor.exception

class AlbumNotFoundException(extractorCode: String, val albumUri: String) :
    BaseException(extractorCode) {

    override val message: String?
        get() = "Album not found for $albumUri"
}