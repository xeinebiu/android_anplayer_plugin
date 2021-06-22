package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AlbumDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AuthorDescriptor

class Album(
    id: String,
    name: String,
    description: String,
    thumbnail: Thumbnail,
    uri: Uri,
    author: AuthorDescriptor?,
    val tracksCount: Int
) : AlbumDescriptor(
    id,
    name,
    description,
    thumbnail,
    uri,
    author
) {
    override val kind: String
        get() = Album::class.java.simpleName
}
