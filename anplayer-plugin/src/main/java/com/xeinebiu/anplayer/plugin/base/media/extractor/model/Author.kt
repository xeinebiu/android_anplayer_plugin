package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AuthorDescriptor

class Author(
    id: String,
    name: String,
    description: String,
    uri: Uri,
    thumbnail: Thumbnail? = null,
    val keywords: List<String>? = null
) : AuthorDescriptor(
    id = id,
    name = name,
    description = description,
    uri = uri,
    thumbnail = thumbnail,
) {
    override val kind: String
        get() = Author::class.java.simpleName
}
