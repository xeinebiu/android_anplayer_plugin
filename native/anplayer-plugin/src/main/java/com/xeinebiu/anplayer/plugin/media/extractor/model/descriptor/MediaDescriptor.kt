package com.xeinebiu.anplayer.plugin.media.extractor.model.descriptor

import android.net.Uri

/**
 * Represents the base model for
 *
 *  * Album
 *  * Author
 *  * Track
 */
open class MediaDescriptor constructor(
    val id: String,
    val name: String,
    val description: String,
    val uri: Uri,
    val thumbnail: Thumbnail?
) : ExtractorContent() {

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
