package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import android.net.Uri

open class Stream(
    val uri: Uri,
    val headers: Map<String, String>? = null
)
