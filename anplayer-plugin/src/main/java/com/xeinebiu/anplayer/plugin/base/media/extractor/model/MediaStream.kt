package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import android.net.Uri
import androidx.annotation.IntDef
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.ExtractorCodeDescriptor

open class MediaStream(
    extractorCode: String,
    val uri: Uri,
    val headers: Map<String, String>?
) : ExtractorCodeDescriptor(extractorCode)

