package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AuthorDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.ExtractorCodeDescriptor

class Comment(
    extractorCode: String,
    val id: String,
    val publishedTime: String,
    val text: String,
    val thumbsUp: Int,
    val author: AuthorDescriptor
) : ExtractorCodeDescriptor(extractorCode)
