import {MdExplore as icon} from 'react-icons/md'

// schemas/pet.js
export default {
  name: 'AO',
  type: 'document',
  title: 'AOs',
  icon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'AO Name',
      description: 'F3 nickname for the site',
    },
    {
      name: 'location_name',
      type: 'string',
      title: 'Location Name',
      description: 'Name of the place where the AO is held',
    },
    {
      name: 'location_geopoint',
      type: 'geopoint',
      title: 'Location Geopoint',
    },
    {
      name: 'location_image',
      type: 'image',
      title: 'Location Image',
    },
  ],
}
