package com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor

open class Thumbnail(
    val smallThumbnail: ThumbnailSource?,
    val mediumThumbnail: ThumbnailSource?,
    val largeThumbnail: ThumbnailSource?
) : ExtractorContent()
