package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.ExtractorCodeDescriptor

class Category(
    extractorCode: String,
    val id: String,
    val name: String,
    val uri: Uri
) : ExtractorCodeDescriptor(extractorCode) {
}