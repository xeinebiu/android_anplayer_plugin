package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AuthorDescriptor

class Author(
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
    val bannerThumbnails: List<Uri>,
    val keywords: List<String>
) : AuthorDescriptor(
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
        get() = Author::class.java.simpleName
}
