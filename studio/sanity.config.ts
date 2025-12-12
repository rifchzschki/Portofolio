import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Portofolio',

  projectId: process.env.SANITY_STUDIO_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  deployment: {
    appId: process.env.SANITY_STUDIO_ID_DEPLOYMENT,
  },
})
