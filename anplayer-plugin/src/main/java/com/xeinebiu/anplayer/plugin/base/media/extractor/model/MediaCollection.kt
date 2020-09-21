package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaDescriptor

class MediaCollection(
    val name: String,
    val media: List<MediaDescriptor>,
    val uri: Uri
)
