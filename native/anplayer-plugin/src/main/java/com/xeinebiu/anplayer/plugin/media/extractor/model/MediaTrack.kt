package com.xeinebiu.anplayer.plugin.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor.AuthorDescriptor
import com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor.MediaTrackDescriptor
import com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor.Thumbnail

open class MediaTrack(
    id: String,
    name: String,
    description: String,
    uri: Uri,
    thumbnail: Thumbnail?,
    duration: Long?,
    isVideo: Boolean?,
    author: AuthorDescriptor?,
    val genre: String?,
    val publishedDate: String?,
    val views: Long?,
    val thumbsDown: Long?,
    val thumbsUp: Long?,
    val keywords: List<String>?
) : MediaTrackDescriptor(
    id = id,
    name = name,
    description = description,
    uri = uri,
    thumbnail = thumbnail,
    duration = duration,
    isVideo = isVideo,
    author = author
)
