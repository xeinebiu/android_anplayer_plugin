package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AuthorDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaTrackDescriptor

class MediaTrack(
    id: String,
    endpoint: String,
    name: String,
    description: String,
    smallThumbnail: Uri,
    mediumThumbnail: Uri,
    largeThumbnail: Uri,
    uri: Uri,
    authorDescriptor: AuthorDescriptor?,
    durationText: String,
    isVideo: Boolean,
    val genre: String,
    val keywords: List<String>,
    val publishedDate: String,
    val duration: Long,
    val views: Long,
    val averageRating: Float,
    val thumbsDown: Int,
    val thumbsUp: Int
) : MediaTrackDescriptor(
    id,
    endpoint,
    name,
    description,
    smallThumbnail,
    mediumThumbnail,
    largeThumbnail,
    uri,
    authorDescriptor,
    durationText,
    isVideo
) {
    override val kind: String
        get() = MediaTrack::class.java.simpleName
}
