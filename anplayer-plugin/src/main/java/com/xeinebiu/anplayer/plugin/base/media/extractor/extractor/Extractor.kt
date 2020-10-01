package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

abstract class Extractor<out T>(val extractorCode: String) : Iterator<List<T>> {
    /**
     * Reset the cursor
     */
    abstract fun reset()
}
