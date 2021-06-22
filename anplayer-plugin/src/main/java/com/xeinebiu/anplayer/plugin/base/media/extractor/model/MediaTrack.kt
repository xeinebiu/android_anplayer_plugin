package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AuthorDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaTrackDescriptor

open class MediaTrack(
    id: String,
    name: String,
    description: String,
    thumbnail: Thumbnail,
    uri: Uri,
    author: AuthorDescriptor?,
    durationText: String,
    isVideo: Boolean,
    val genre: String,
    val keywords: List<String>,
    val publishedDate: String,
    val duration: Long,
    val views: Long,
    val averageRating: Float,
    val thumbsDown: Int,
    val thumbsUp: Int
) : MediaTrackDescriptor(
    id,
    name,
    description,
    thumbnail,
    uri,
    author,
    durationText,
    isVideo
) {
    override val kind: String
        get() = MediaTrack::class.java.simpleName
}
