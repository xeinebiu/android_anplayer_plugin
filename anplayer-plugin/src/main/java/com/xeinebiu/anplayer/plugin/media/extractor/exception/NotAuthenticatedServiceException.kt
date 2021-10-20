package com.xeinebiu.anplayer.plugin.media.extractor.exception

class NotAuthenticatedServiceException(
    cause: Throwable?
) : MediaExtractorException("", cause) {

    override val message: String?
        get() = cause?.message

    override fun getLocalizedMessage(): String? = cause?.localizedMessage
}
