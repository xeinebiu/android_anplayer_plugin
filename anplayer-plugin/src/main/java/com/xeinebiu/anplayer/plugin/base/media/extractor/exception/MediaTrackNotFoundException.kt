package com.xeinebiu.anplayer.plugin.base.media.extractor.exception

class MediaTrackNotFoundException(extractorCode: String, val uri: String) :
    BaseException(extractorCode) {

    override val message: String?
        get() = "Media Track not found for uri $uri"
}