package com.xeinebiu.anplayer.plugin.base.media.extractor.exception

import android.net.Uri

class AuthorNotFoundException(
    val author: Uri,
    cause: Throwable?
) : MediaExtractorException(author.toString(), cause)
