package com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor

import android.net.Uri

open class MediaTrackDescriptor(
    extractorCode: String,
    id: String,
    endpoint: String,
    name: String,
    description: String,
    largeThumbnail: Uri,
    mediumThumbnail: Uri,
    smallThumbnail: Uri,
    thumbnails: List<Uri>,
    uri: Uri,
    val author: AuthorDescriptor,
    val durationText: String
) : MediaDescriptor(
    extractorCode,
    id,
    endpoint,
    name,
    description,
    largeThumbnail,
    mediumThumbnail,
    smallThumbnail,
    thumbnails,
    uri
) {
    override val kind: String
        get() = MediaTrackDescriptor::class.java.simpleName
}
