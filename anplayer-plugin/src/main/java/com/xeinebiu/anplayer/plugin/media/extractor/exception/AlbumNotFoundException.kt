package com.xeinebiu.anplayer.plugin.media.extractor.exception

import android.net.Uri

class AlbumNotFoundException(
    val album: Uri,
    cause: Throwable?
) : MediaExtractorException(album.toString(), cause)
