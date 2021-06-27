package com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor

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
) {
    override val kind: String
        get() = MediaTrackDescriptor::class.java.simpleName
}
