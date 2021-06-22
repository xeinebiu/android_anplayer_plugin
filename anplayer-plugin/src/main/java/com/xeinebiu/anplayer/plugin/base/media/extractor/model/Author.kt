package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AuthorDescriptor

class Author(
    id: String,
    name: String,
    description: String,
    thumbnail: Thumbnail,
    uri: Uri,
    val keywords: List<String>
) : AuthorDescriptor(
    id,
    name,
    description,
    thumbnail,
    uri
) {
    override val kind: String
        get() = Author::class.java.simpleName
}
