package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AuthorDescriptor

class Author(
    id: String,
    endpoint: String,
    name: String,
    description: String,
    smallThumbnail: Uri,
    mediumThumbnail: Uri,
    largeThumbnail: Uri,
    uri: Uri,
    val bannerThumbnails: List<Uri>,
    val keywords: List<String>
) : AuthorDescriptor(
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
        get() = Author::class.java.simpleName
}
