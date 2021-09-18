package com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor

import android.net.Uri

open class Thumbnail(
    val smallThumbnail: Uri?,
    val mediumThumbnail: Uri?,
    val largeThumbnail: Uri?
) : ExtractorContent()
