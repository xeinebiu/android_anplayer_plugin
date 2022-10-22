package com.xeinebiu.anplayer.plugin.media.extractor.exception

import android.net.Uri
import com.xeinebiu.anplayer.plugin.media.extractor.AuthorityCookie

/**
 * Exception to throw when a Captcha or any user feedback is required
 *
 * @param uri - The uri to open in browser
 * @param userAgent - User agent to set in browser
 * @param cause - The exception if any
 */
abstract class UserInputNeededException(
    val uri: Uri,
    val userAgent: String,
    cause: Throwable?
) : MediaExtractorException(uri.toString(), cause) {

    /**
     * Validate if the issue is resolved from current [html] state
     */
    abstract fun isResolved(html: String): Boolean

    /**
     * Cookies returned after resolve
     */
    abstract fun resolved(authorityCookie: AuthorityCookie)
}
