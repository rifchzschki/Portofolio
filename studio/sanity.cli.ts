import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
    appId: process.env.SANITY_STUDIO_ID_DEPLOYMENT,
  },
  studioHost: 'rifkivirzya'
})
