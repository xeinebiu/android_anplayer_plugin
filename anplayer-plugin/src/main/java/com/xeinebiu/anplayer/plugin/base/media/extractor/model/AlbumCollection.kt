package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AlbumDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaTrackDescriptor

class AlbumCollection(
    val name: String,
    val albums: List<AlbumDescriptor>,
    val tracks: List<MediaTrackDescriptor>,
    val endpoint: String,
    val uri: Uri
)
