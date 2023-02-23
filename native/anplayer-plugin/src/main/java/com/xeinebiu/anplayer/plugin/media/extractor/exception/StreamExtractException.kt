package com.xeinebiu.anplayer.plugin.media.extractor.exception

import android.net.Uri

class StreamExtractException(
    mediaTrack: Uri,
    cause: Throwable?
) : Exception(mediaTrack.toString(), cause)
