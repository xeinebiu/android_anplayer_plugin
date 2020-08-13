package com.xeinebiu.anplayer.plugin.base.media.extractor.extractor

abstract class Extractor<T>(val extractorCode: String) {
    /**
     * Returns first page content
     */
    abstract fun getFirstPage(): List<T>

    /**
     * Returns next page content
     */
    abstract fun getNextPage(): List<T>

    /**
     * Returns `true` if there is a next page available, `false` otherwise
     */
    abstract fun hasNextPage(): Boolean
}