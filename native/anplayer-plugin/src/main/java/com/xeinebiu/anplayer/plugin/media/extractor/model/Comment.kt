package com.xeinebiu.anplayer.plugin.media.extractor.model

import com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor.AuthorDescriptor
import com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor.ExtractorContent

open class Comment(
    val id: String,
    val publishedTime: String,
    val text: String,
    val thumbsUp: Long,
    val author: AuthorDescriptor?
) : ExtractorContent()
