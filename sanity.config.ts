import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'f3',

  projectId: '22i3wv6j',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    googleMapsInput({
      apiKey: 'AIzaSyC8Rhvj-EjGyUFSXUdd2yRI2Dw_VQZwdsU',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
