package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.Comment
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.MediaStream
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.MediaTrack
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.Subtitle
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaTrackDescriptor

/**
 * Extractor for a single Track
 */
abstract class MediaTrackExtractor(extractorCode: String) :
    Extractor<MediaTrackDescriptor>(extractorCode) {

    /**
     * Returns default stream
     */
    abstract fun getStream(): MediaStream?

    /**
     * Returns a collection of streams that contains Audio Only
     */
    abstract fun getAudioOnlyStreams(): List<MediaStream>

    /**
     * Returns first page content of comments
     */
    abstract fun getCommentsFirstPage(): List<Comment>

    /**
     * Returns next page content of comments
     */
    abstract fun getCommentsNextPage(): List<Comment>

    /**
     * Returns a collection of streams that contains Audio and Video
     */
    abstract fun getMixedStreams(): List<MediaStream>

    /**
     * Returns a collection of subtitles
     */
    abstract fun getSubtitles(): List<Subtitle>

    /**
     * Returns the Media Track
     */
    abstract fun getTrack(): MediaTrack

    /**
     * Returns a collection of streams that contains only Video without Audio
     */
    abstract fun getVideoOnlyStreams(): List<MediaStream>

    /**
     * Returns `true` if there is a next page available for comments, `false` otherwise
     */
    abstract fun hasCommentsNextPage(): Boolean
}
