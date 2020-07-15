package com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor

import android.net.Uri

open class MediaTrackDescriptor(
    extractorCode: String,
    id: String,
    endpoint: String,
    name: String,
    description: String,
    smallThumbnail: Uri,
    mediumThumbnail: Uri,
    largeThumbnail: Uri,
    uri: Uri,
    val author: AuthorDescriptor,
    val durationText: String,
    val isVideo: Boolean
) : MediaDescriptor(
    extractorCode,
    id,
    endpoint,
    name,
    description,
    smallThumbnail,
    mediumThumbnail,
    largeThumbnail,
    uri
) {
    override val kind: String
        get() = MediaTrackDescriptor::class.java.simpleName
}
