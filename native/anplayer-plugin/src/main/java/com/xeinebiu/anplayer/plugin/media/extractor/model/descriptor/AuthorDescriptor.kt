package com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor

import android.net.Uri

open class AuthorDescriptor(
    id: String,
    name: String,
    description: String,
    uri: Uri,
    thumbnail: Thumbnail?
) : MediaDescriptor(
    id = id,
    name = name,
    description = description,
    uri = uri,
    thumbnail = thumbnail
)
