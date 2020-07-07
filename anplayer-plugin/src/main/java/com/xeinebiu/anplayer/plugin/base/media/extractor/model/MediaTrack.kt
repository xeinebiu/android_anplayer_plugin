package com.xeinebiu.anplayer.plugin.base.media.extractor.model

import android.net.Uri
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.AuthorDescriptor
import com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor.MediaTrackDescriptor

class MediaTrack(
    extractorCode: String,
    id: String,
    endpoint: String,
    name: String,
    largeThumbnail: Uri,
    mediumThumbnail: Uri,
    smallThumbnail: Uri,
    thumbnails: List<Uri>,
    uri: Uri,
    authorDescriptor: AuthorDescriptor,
    durationText: String,
    description: String,
    val genre: String,
    val keywords: List<String>,
    val publishedDate: String,
    val duration: Long,
    val views: Long,
    val averageRating: Float,
    val thumbsDown: Int,
    val thumbsUp: Int
) : MediaTrackDescriptor(
    extractorCode,
    id,
    endpoint,
    name,
    largeThumbnail,
    mediumThumbnail,
    smallThumbnail,
    thumbnails,
    uri,
    description,
    authorDescriptor,
    durationText
) {
    override val kind: String
        get() = MediaTrack::class.java.simpleName
}
