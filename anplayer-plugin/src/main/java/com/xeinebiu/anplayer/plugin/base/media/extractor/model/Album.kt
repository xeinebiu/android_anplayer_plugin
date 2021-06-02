package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AlbumDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AuthorDescriptor

class Album(
    id: String,
    endpoint: String,
    name: String,
    description: String,
    smallThumbnail: Uri,
    mediumThumbnail: Uri,
    largeThumbnail: Uri,
    uri: Uri,
    authorDescriptor: AuthorDescriptor?,
    val tracksCount: Int
) : AlbumDescriptor(
    id,
    endpoint,
    name,
    description,
    smallThumbnail,
    mediumThumbnail,
    largeThumbnail,
    uri,
    authorDescriptor
) {
    override val kind: String
        get() = Album::class.java.simpleName
}
