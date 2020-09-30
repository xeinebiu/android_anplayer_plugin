package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

abstract class Extractor<T>(val extractorCode: String) {
    /**
     * Reset the cursor
     */
    abstract fun reset()

    /**
     * Returns next page content
     */
    abstract fun next(): List<T>

    /**
     * Returns `true` if there is a next page available, `false` otherwise
     */
    abstract fun hasNext(): Boolean
}