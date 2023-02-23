package com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor

import android.net.Uri

open class MediaTrackDescriptor(
    id: String,
    name: String,
    description: String,
    uri: Uri,
    thumbnail: Thumbnail?,
    val duration: Long?,
    val isVideo: Boolean?,
    val author: AuthorDescriptor?
) : MediaDescriptor(
    id = id,
    name = name,
    description = description,
    uri = uri,
    thumbnail = thumbnail
)
