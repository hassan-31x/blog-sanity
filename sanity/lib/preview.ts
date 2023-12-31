"use client"

import { definePreview } from 'next-sanity/preview'
import { projectId, dataset } from '../env'

function onPublicAccessOnly() {
    throw new Error('Unable to load preview data as you are not logged in!')
}

if (!projectId || !dataset) {
    throw new Error('Missing projectId or dataset values. Check your sanity.json or .env')
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
})