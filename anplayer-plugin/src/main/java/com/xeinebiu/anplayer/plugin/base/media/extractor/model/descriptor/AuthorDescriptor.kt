package com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor

import android.net.Uri

open class AuthorDescriptor(
    id: String,
    name: String,
    description: String,
    uri: Uri,
    thumbnail: Thumbnail? = null
) : MediaDescriptor(
    id = id,
    name = name,
    description = description,
    uri = uri,
    thumbnail = thumbnail
) {
    override val kind: String
        get() = AuthorDescriptor::class.java.simpleName
}
