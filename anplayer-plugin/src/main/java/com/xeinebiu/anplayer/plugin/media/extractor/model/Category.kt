package com.xeinebiu.anplayer.plugin.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor.ExtractorContent

open class Category(
    val id: String,
    val name: String,
    val uri: Uri
) : ExtractorContent()
