package com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor

import android.net.Uri

open class AlbumDescriptor(
    id: String,
    name: String,
    description: String,
    uri: Uri,
    thumbnail: Thumbnail?,
    val author: AuthorDescriptor?
) : MediaDescriptor(
    id = id,
    name = name,
    description = description,
    uri = uri,
    thumbnail = thumbnail
)
