package com.xeinebiu.anplayer.plugin.media.extractor.model

import android.net.Uri

open class Stream(
    val uri: Uri,
    val headers: Map<String, String>? = null
)
