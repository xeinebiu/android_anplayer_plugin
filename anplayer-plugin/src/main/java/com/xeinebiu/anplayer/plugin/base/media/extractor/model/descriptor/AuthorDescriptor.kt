package com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor

import android.net.Uri

open class AuthorDescriptor(
    id: String,
    name: String,
    description: String,
    thumbnail: Thumbnail,
    uri: Uri
) : MediaDescriptor(
    id,
    name,
    description,
    thumbnail,
    uri
) {
    override val kind: String
        get() = AuthorDescriptor::class.java.simpleName
}
