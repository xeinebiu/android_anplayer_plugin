package com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor

import android.net.Uri

open class MediaTrackDescriptor(
    extractorCode: String,
    id: String,
    endpoint: String,
    name: String,
    largeThumbnail: Uri,
    mediumThumbnail: Uri,
    smallThumbnail: Uri,
    thumbnails: List<Uri>,
    uri: Uri,
    val author: AuthorDescriptor,
    val durationText: String,
    val description: String
) : MediaDescriptor(
    extractorCode,
    id,
    endpoint,
    name,
    largeThumbnail,
    mediumThumbnail,
    smallThumbnail,
    thumbnails,
    uri
) {
    override val kind: String
        get() = MediaTrackDescriptor::class.java.simpleName
}
