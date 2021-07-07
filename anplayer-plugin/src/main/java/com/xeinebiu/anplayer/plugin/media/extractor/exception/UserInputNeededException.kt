package com.xeinebiu.anplayer.plugin.media.extractor.exception

import android.net.Uri
import java.net.CookieManager

/**
 * Exception to throw when a Captcha or any user feedback is required
 *
 * @param uri - The uri to open in browser
 * @param cookieManager - Read & Write cookies to
 * @param cause - The exception if any
 */
class UserInputNeededException(
    val uri: Uri,
    val cookieManager: CookieManager,
    cause: Throwable?
) : MediaExtractorException(uri.toString(), cause)
