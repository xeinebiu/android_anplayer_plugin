package com.xeinebiu.anplayer.plugin.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor.ExtractorContent

open class Stream(
    val uri: Uri,
    val headers: Map<String, String>?
) : ExtractorContent()
