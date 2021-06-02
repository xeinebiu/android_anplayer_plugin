package com.xeinebiu.anplayer.plugin.base.media.extractor.exception

abstract class MediaExtractorException(
    message: String,
    cause: Throwable?
) : Exception(message, cause)
