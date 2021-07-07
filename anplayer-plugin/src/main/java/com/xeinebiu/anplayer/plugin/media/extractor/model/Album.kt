package com.xeinebiu.anplayer.plugin.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor.AlbumDescriptor
import com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor.AuthorDescriptor

open class Album(
    id: String,
    name: String,
    description: String,
    uri: Uri,
    thumbnail: Thumbnail? = null,
    author: AuthorDescriptor? = null,
    val tracksCount: Int? = null
) : AlbumDescriptor(
    id = id,
    name = name,
    description = description,
    uri = uri,
    thumbnail = thumbnail,
    author = author
) {
    override val kind: String
        get() = Album::class.java.simpleName
}
