package com.xeinebiu.anplayer.plugin.media.extractor.exception

import android.net.Uri

/**
 * Exception to throw when a Captcha or any user feedback is required
 *
 * @param uri - The uri to open in browser
 * @param userAgent - User agent to set in browser
 * @param isResolved - Validate if issue is resolved
 * @param cause - The exception if any
 */
class UserInputNeededException(
    val uri: Uri,
    val userAgent: String,
    val isResolved: (html: String) -> Boolean,
    cause: Throwable?
) : MediaExtractorException(uri.toString(), cause)
