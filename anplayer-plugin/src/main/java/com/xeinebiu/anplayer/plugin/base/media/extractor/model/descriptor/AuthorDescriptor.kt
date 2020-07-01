package com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor

import android.net.Uri

open class AuthorDescriptor(
    extractorCode: String,
    id: String,
    endpoint: String,
    name: String,
    largeThumbnail: Uri,
    mediumThumbnail: Uri,
    smallThumbnail: Uri,
    thumbnails: List<Uri>,
    uri: Uri
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
        get() = AuthorDescriptor::class.java.simpleName
}
