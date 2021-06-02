package com.xeinebiu.anplayer.plugin.base.media.extractor.exception

import android.net.Uri

class SubtitleExtractException(
    mediaTrack: Uri,
    cause: Throwable?
) : Exception(mediaTrack.toString(), cause)