package com.xeinebiu.anplayer.plugin.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor.AuthorDescriptor
import com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor.Thumbnail

open class Author(
    id: String,
    name: String,
    description: String,
    uri: Uri,
    thumbnail: Thumbnail?,
    val keywords: List<String>?
) : AuthorDescriptor(
    id = id,
    name = name,
    description = description,
    uri = uri,
    thumbnail = thumbnail,
)