package com.xeinebiu.anplayer.plugin.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor.AuthorDescriptor
import com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor.MediaTrackDescriptor

open class MediaTrack(
    id: String,
    name: String,
    description: String,
    uri: Uri,
    thumbnail: Thumbnail? = null,
    duration: Long? = null,
    isVideo: Boolean? = null,
    author: AuthorDescriptor? = null,
    val genre: String? = null,
    val publishedDate: String? = null,
    val views: Long? = null,
    val averageRating: Float? = null,
    val thumbsDown: Int? = null,
    val thumbsUp: Int? = null,
    val keywords: List<String>? = null
) : MediaTrackDescriptor(
    id = id,
    name = name,
    description = description,
    uri = uri,
    thumbnail = thumbnail,
    duration = duration,
    isVideo = isVideo,
    author = author
) {
    override val kind: String
        get() = MediaTrack::class.java.simpleName
}
