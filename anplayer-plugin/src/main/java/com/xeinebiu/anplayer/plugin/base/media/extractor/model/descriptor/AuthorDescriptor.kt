package com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor

import android.net.Uri

open class AuthorDescriptor(
    id: String,
    name: String,
    description: String,
    smallThumbnail: Uri,
    mediumThumbnail: Uri,
    largeThumbnail: Uri,
    uri: Uri
) : MediaDescriptor(
    id,
    name,
    description,
    smallThumbnail,
    mediumThumbnail,
    largeThumbnail,
    uri
) {
    override val kind: String
        get() = AuthorDescriptor::class.java.simpleName
}
