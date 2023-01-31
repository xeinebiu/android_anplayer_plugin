package com.xeinebiu.anplayer.plugin.media.extractor.exception

import android.net.Uri

/**
 * Exception to throw when a Captcha or any user feedback is required
 *
 * @param uri - The uri to open in browser
 * @param headers - Headers agent to set in browser
 * @param cause - The exception if any
 */
abstract class UserInputRequiredException(
    val uri: Uri,
    val headers: Map<String, String>?,
    cause: Throwable?
) : MediaExtractorException(uri.toString(), cause) {

    /**
     * Validate if the issue is resolved from current [html] state
     */
    abstract fun isResolved(html: String): Boolean

    /**
     * Cookies returned after resolve
     */
    abstract fun resolved(uri: Uri, cookies: String)
}
