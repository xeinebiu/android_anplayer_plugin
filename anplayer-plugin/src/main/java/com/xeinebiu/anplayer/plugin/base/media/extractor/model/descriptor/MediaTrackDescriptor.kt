package com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor

import android.net.Uri

open class MediaTrackDescriptor(
    id: String,
    name: String,
    description: String,
    thumbnail: Thumbnail,
    uri: Uri,
    val author: AuthorDescriptor?,
    val durationText: String,
    val isVideo: Boolean
) : MediaDescriptor(
    id,
    name,
    description,
    thumbnail,
    uri
) {
    override val kind: String
        get() = MediaTrackDescriptor::class.java.simpleName
}
