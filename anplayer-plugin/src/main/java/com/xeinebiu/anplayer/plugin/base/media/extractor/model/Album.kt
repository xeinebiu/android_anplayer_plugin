package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AlbumDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AuthorDescriptor

class Album(
    extractorCode: String,
    id: String,
    endpoint: String,
    name: String,
    description: String,
    largeThumbnail: Uri,
    mediumThumbnail: Uri,
    smallThumbnail: Uri,
    thumbnails: List<Uri>,
    uri: Uri,
    authorDescriptor: AuthorDescriptor,
    val tracksCount: Int
) : AlbumDescriptor(
    extractorCode,
    id,
    endpoint,
    name,
    description,
    largeThumbnail,
    mediumThumbnail,
    smallThumbnail,
    thumbnails,
    uri,
    authorDescriptor
) {
    override val kind: String
        get() = Album::class.java.simpleName
}
