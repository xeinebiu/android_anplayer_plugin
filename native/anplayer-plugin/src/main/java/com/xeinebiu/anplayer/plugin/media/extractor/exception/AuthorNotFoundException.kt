package com.xeinebiu.anplayer.plugin.media.extractor.exception

import android.net.Uri

class AuthorNotFoundException(
    val author: Uri,
    cause: Throwable?
) : MediaExtractorException(author.toString(), cause)
