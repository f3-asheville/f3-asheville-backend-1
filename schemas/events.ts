import {MdNotifications as icon} from 'react-icons/md'

// schemas/pet.js
export default {
  name: 'events',
  type: 'document',
  title: 'Events',
  icon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Event Name',
    },
    {
      name: 'AO',
      type: 'reference',
      to: [{type: 'AO'}],
      title: 'AO',
    },
    {
      name: 'date_time',
      type: 'datetime',
      title: 'Date and Time',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Event Location',
      description: 'Location of Event',
    },
    {
      name: 'organizer',
      type: 'string',
      title: 'Event Organizer',
      description: 'Name of F3 member organizing event',
    },
  ],
}
// ## Events

// - Name
// - Date
// - Time
// - FK: AOs --> Location
// - Leader
