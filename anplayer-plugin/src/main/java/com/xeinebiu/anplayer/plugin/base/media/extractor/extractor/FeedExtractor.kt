package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaDescriptor

/**
 * Extractor for Home
 */
abstract class FeedExtractor(extractorCode: String) : Extractor<MediaDescriptor>(extractorCode)
