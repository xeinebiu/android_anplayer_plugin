package com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor

import android.net.Uri

/**
 * Is the base model for
 *
 *  * Album
 *  * Author
 *  * Track
 */
abstract class MediaDescriptor(
    extractorCode: String,
    val id: String,
    val endpoint: String,
    val name: String,
    val largeThumbnail: Uri,
    val mediumThumbnail: Uri,
    val smallThumbnail: Uri,
    val thumbnails: List<Uri>,
    val uri: Uri
) : ExtractorCodeDescriptor(extractorCode) {

    abstract val kind: String

    override fun hashCode(): Int {
        var result = id.hashCode()
        result = 31 * result + uri.hashCode()
        return result
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || javaClass != other.javaClass) return false
        val that = other as MediaDescriptor
        if (id != that.id) return false
        return uri == that.uri
    }
}
