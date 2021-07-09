package com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor

import android.net.Uri

open class MediaTrackDescriptor(
    id: String,
    name: String,
    description: String,
    uri: Uri,
    thumbnail: Thumbnail? = null,
    val duration: Long? = null,
    val isVideo: Boolean? = null,
    val author: AuthorDescriptor? = null
) : MediaDescriptor(
    id = id,
    name = name,
    description = description,
    uri = uri,
    thumbnail = thumbnail
)
