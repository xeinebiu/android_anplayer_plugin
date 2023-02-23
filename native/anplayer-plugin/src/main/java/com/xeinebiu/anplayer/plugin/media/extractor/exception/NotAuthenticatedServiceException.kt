package com.xeinebiu.anplayer.plugin.media.extractor.exception

class NotAuthenticatedServiceException(
    cause: Throwable?
) : MediaExtractorException(cause?.message.orEmpty(), cause)
