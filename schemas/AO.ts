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
      name: 'City',
      type: 'string',
      title: 'AO City',
    },
    {
      name: 'neighborhood',
      type: 'string',
      title: 'AO Neighborhood',
      description:
        'General Neighborhood, e.g. "North Asheville" or "Black Mountain". This will help newcomers pick an AO off the map.',
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
  ],
}
