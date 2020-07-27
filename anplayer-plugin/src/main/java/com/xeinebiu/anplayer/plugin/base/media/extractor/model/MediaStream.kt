package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import android.net.Uri
import androidx.annotation.IntDef
import com.xeinebiu.anplayer.plugin.base.media.extractor.enum.MediaFormat
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.ExtractorCodeDescriptor

class MediaStream(
    extractorCode: String,
    val format: MediaFormat,
    val resolution: String,
    @get:MediaStream.MediaQuality val quality: Int,
    val size: Long,
    @get:MediaStream.MediaStreamType val streamType: Int,
    val uri: Uri
) : ExtractorCodeDescriptor(extractorCode) {

    @kotlin.annotation.Retention(AnnotationRetention.SOURCE)
    @IntDef(
        QUALITY_VIDEO_EXTRA_LOW,
        QUALITY_VIDEO_LOW,
        QUALITY_VIDEO_MEDIUM,
        QUALITY_VIDEO_HQ,
        QUALITY_VIDEO_HD,
        QUALITY_VIDEO_FULL_HD,
        QUALITY_VIDEO_2K,
        QUALITY_VIDEO_4K,
        QUALITY_VIDEO_8K,
        QUALITY_AUDIO_EXTRA_LOW,
        QUALITY_AUDIO_LOW,
        QUALITY_AUDIO_POOR,
        QUALITY_AUDIO_MEDIUM,
        QUALITY_AUDIO_HIGH,
        QUALITY_AUDIO_EXTRA_HIGH
    )
    annotation class MediaQuality

    @kotlin.annotation.Retention(AnnotationRetention.SOURCE)
    @IntDef(
        TYPE_MUSIC,
        TYPE_MUSIC_VIDEO,
        TYPE_VIDEO
    )
    annotation class MediaStreamType

    companion object {
        const val AUDIO_RESOLUTION = "0p"
        const val QUALITY_AUDIO_EXTRA_LOW = 48
        const val QUALITY_AUDIO_LOW = 64
        const val QUALITY_AUDIO_POOR = 96
        const val QUALITY_AUDIO_MEDIUM = 128
        const val QUALITY_AUDIO_HIGH = 256
        const val QUALITY_AUDIO_EXTRA_HIGH = 320
        const val QUALITY_VIDEO_UNDEFINED = 0
        const val QUALITY_VIDEO_EXTRA_LOW = 144
        const val QUALITY_VIDEO_LOW = 240
        const val QUALITY_VIDEO_MEDIUM = 360
        const val QUALITY_VIDEO_HQ = 480
        const val QUALITY_VIDEO_HD = 720
        const val QUALITY_VIDEO_FULL_HD = 1080
        const val QUALITY_VIDEO_2K = 2160
        const val QUALITY_VIDEO_4K = 4320
        const val QUALITY_VIDEO_8K = 8640

        const val TYPE_MUSIC = 0
        const val TYPE_VIDEO = 1
        const val TYPE_MUSIC_VIDEO = 2

        /**
         * Get audio quality constant from given bitrate
         *
         * @param bitrate Bitrate
         * @return Related constant
         */
        fun getQualityFromAudioBitrate(bitrate: Int): Int =
            when {
                bitrate < 50 -> QUALITY_AUDIO_EXTRA_LOW
                bitrate <= 64 -> QUALITY_AUDIO_LOW
                bitrate <= 96 -> QUALITY_AUDIO_POOR
                bitrate <= 128 -> QUALITY_AUDIO_MEDIUM
                bitrate <= 256 -> QUALITY_AUDIO_HIGH
                else -> QUALITY_AUDIO_EXTRA_HIGH
            }

        /**
         * Get quality constant from resolution text of a video
         *
         * @param resolution Video resolution from 144p to 8K
         * @return Constant value of quality
         */
        fun getQualityFromResolution(resolution: String): Int {
            val height = if (resolution.contains("x", true))
                resolution.toLowerCase().split("x")[1].filter { it.isDigit() }.toInt()
            else
                resolution.filter { it.isDigit() }.toInt()

            return when {
                height <= QUALITY_VIDEO_EXTRA_LOW -> QUALITY_VIDEO_EXTRA_LOW
                height <= QUALITY_VIDEO_LOW -> QUALITY_VIDEO_LOW
                height <= QUALITY_VIDEO_MEDIUM -> QUALITY_VIDEO_MEDIUM
                height <= QUALITY_VIDEO_HQ -> QUALITY_VIDEO_HQ
                height <= QUALITY_VIDEO_HD -> QUALITY_VIDEO_HD
                height <= QUALITY_VIDEO_FULL_HD -> QUALITY_VIDEO_FULL_HD
                height <= QUALITY_VIDEO_2K -> QUALITY_VIDEO_2K
                height <= QUALITY_VIDEO_4K -> QUALITY_VIDEO_4K
                height <= QUALITY_VIDEO_8K -> QUALITY_VIDEO_8K
                height <= QUALITY_VIDEO_EXTRA_LOW -> QUALITY_VIDEO_EXTRA_LOW
                else -> QUALITY_VIDEO_UNDEFINED
            }
        }
    }
}
