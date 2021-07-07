package com.xeinebiu.anplayer.plugin.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.media.extractor.exception.MediaNotFoundException
import com.xeinebiu.anplayer.plugin.media.extractor.exception.StreamExtractException
import com.xeinebiu.anplayer.plugin.media.extractor.exception.SubtitleExtractException
import com.xeinebiu.anplayer.plugin.media.extractor.model.MediaTrack
import com.xeinebiu.anplayer.plugin.media.extractor.model.Stream
import com.xeinebiu.anplayer.plugin.media.extractor.model.Subtitle
import com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor.MediaTrackDescriptor

/**
 * Extractor for a single Track
 */
abstract class MediaTrackExtractor : Extractor<MediaTrackDescriptor>() {

    /**
     * Returns a collection of streams that contains Audio Only
     */
    @Throws(StreamExtractException::class)
    abstract fun getAudioOnlyStreams(): List<Stream>

    /**
     * Returns a collection of streams that contains Audio and Video
     */
    @Throws(StreamExtractException::class)
    abstract fun getMixedStreams(): List<Stream>

    /**
     * Returns a collection of streams that contains only Video without Audio
     */
    @Throws(StreamExtractException::class)
    abstract fun getVideoOnlyStreams(): List<Stream>

    /**
     * Returns a collection of subtitles
     */
    @Throws(SubtitleExtractException::class)
    abstract fun getSubtitles(): List<Subtitle>

    /**
     * Returns the Media Track
     */
    @Throws(MediaNotFoundException::class)
    abstract fun getTrack(): MediaTrack
}
