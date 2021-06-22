package com.xeinebiu.anplayer.plugin.base.media.extractor.model.descriptor

import android.net.Uri

/**
 * Represents the base model for
 *
 *  * Album
 *  * Author
 *  * Track
 */
abstract class MediaDescriptor(
    val id: String,
    val name: String,
    val description: String,
    val thumbnail: Thumbnail,
    val uri: Uri
) {

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

    data class Thumbnail(
        val smallThumbnail: Uri,
        val mediumThumbnail: Uri,
        val largeThumbnail: Uri
    )
}
