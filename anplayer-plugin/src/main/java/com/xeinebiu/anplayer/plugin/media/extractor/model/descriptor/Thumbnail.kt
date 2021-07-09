package com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor

import android.net.Uri

open class Thumbnail(
    val smallThumbnail: Uri? = null,
    val mediumThumbnail: Uri? = null,
    val largeThumbnail: Uri? = null
)
