package com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor

import android.net.Uri

open class AlbumDescriptor(
    id: String,
    name: String,
    description: String,
    thumbnail: Thumbnail,
    uri: Uri,
    val author: AuthorDescriptor?
) : MediaDescriptor(
    id,
    name,
    description,
    thumbnail,
    uri
) {
    override val kind: String
        get() = AlbumDescriptor::class.java.simpleName
}
