import {MdTimer as icon} from 'react-icons/md'

// schemas/pet.js
export default {
  name: 'schedule',
  type: 'document',
  title: 'Schedule',
  icon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Schedule Name',
      description: 'Name of this schedule, eg. "Northbound Weekday Morning"',
    },
    {
      name: 'AO',
      type: 'reference',
      to: [{type: 'AO'}],
      title: 'AO',
    },
    {
      name: 'day',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Day of the Week',
      layout: 'tags',
      options: {
        list: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      },
    },
    {
      name: 'style',
      type: 'string',
      title: 'Workout Style',
      description: 'Type of workout, eg. "Bootcamp, Run"',
    },
    {
      name: 'start_time',
      type: 'string',
      title: 'Start Time',
      description: 'Start time, eg. 05:30',
    },
  ],
}
