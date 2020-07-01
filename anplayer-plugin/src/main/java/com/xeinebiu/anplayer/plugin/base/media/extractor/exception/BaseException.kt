package com.xeinebiu.anplayer.plugin.base.media.extractor.exception

open class BaseException : Exception {
    private val mExtractorCode: String

    constructor(extractorCode: String) {
        mExtractorCode = extractorCode
    }

    constructor(message: String?, extractorCode: String) : super(message) {
        mExtractorCode = extractorCode
    }

    constructor(message: String?, cause: Throwable?, extractorCode: String) : super(
        message,
        cause
    ) {
        mExtractorCode = extractorCode
    }

    constructor(cause: Throwable?, extractorCode: String) : super(cause) {
        mExtractorCode = extractorCode
    }
}
