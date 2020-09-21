package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaDescriptor

abstract class MediaCollectionExtractor(extractorCode: String) :
    Extractor<MediaDescriptor>(extractorCode)
