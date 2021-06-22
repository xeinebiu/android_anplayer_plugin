package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AuthorDescriptor

open class Comment(
    val id: String,
    val publishedTime: String,
    val text: String,
    val thumbsUp: Int,
    val author: AuthorDescriptor?
)
