package com.xeinebiu.anplayer.plugin.media.extractor.exception

import android.net.Uri

class MediaNotFoundException(
    val mediaTrack: Uri,
    cause: Throwable?
) : MediaExtractorException(mediaTrack.toString(), cause)
