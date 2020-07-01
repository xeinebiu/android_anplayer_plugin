package com.xeinebiu.anplayer.plugin.base.media.extractor.enum

import com.xeinebiu.anplayer.plugin.base.media.extractor.exception.NotSupportedMediaFormatException
import com.xeinebiu.anplayer.plugin.base.media.extractor.exception.NotSupportedMimeTypeException

/**
 * Specifies the Format of specific Media Content
 */
enum class MediaFormat(val id: Int, val _name: String, val suffix: String, val mimeType: String) {
    MPEG_4(0x0, "MPEG-4", "mp4", "video/mp4"),
    V3GPP(0x10, "3GPP", "3gp", "video/3gpp"),
    WEBM(0x20, "WebM", "webm", "video/webm"),

    // audio formats
    M4A(0x100, "m4a", "m4a", "audio/mp4"),
    WEBMA(0x200, "WebM", "webm", "audio/webm"),
    MP3(0x300, "MP3", "mp3", "audio/mpeg"),
    OPUS(0x400, "opus", "opus", "audio/opus"),
    OGG(0x500, "ogg", "ogg", "audio/ogg"),
    WEBMA_OPUS(0x200, "WebM Opus", "webm", "audio/webm"),

    // subtitles formats
    VTT(0x1000, "WebVTT", "vtt", "text/vtt"),
    TTML(0x2000, "Timed Text Markup Language", "ttml", "application/ttml+xml"),
    TRANSCRIPT1(0x3000, "TranScript v1", "srv1", "text/xml"),
    TRANSCRIPT2(0x4000, "TranScript v2", "srv2", "text/xml"),
    TRANSCRIPT3(0x5000, "TranScript v3", "srv3", "text/xml"),
    SRT(0x6000, "SubRip file format", "srt", "text/srt");

    companion object {
        fun getByMimeType(mimeType: String?): MediaFormat {
            for (vf in values())
                if (vf.mimeType == mimeType) return vf

            throw NotSupportedMimeTypeException(mimeType)
        }

        fun getByName(name: String): MediaFormat {
            for (vf in values())
                if (vf._name == name) return vf

            throw NotSupportedMediaFormatException(name)
        }
    }

}
