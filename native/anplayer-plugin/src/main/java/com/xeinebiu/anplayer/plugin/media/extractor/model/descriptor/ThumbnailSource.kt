package com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor

import android.net.Uri

open class ThumbnailSource(
    val uri: Uri,
    val headers: Map<String, String>?
)
