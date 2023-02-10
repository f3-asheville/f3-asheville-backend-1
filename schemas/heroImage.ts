import {MdPhotoCamera as icon} from 'react-icons/md'

// schemas/pet.js
export default {
  name: 'heroImage',
  type: 'document',
  title: 'Hero Image',
  icon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Image Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'current',
      type: 'boolean',
      title: 'Current Image',
      description:
        'This is the image that will display on the home page. There should only be one selected from all the images uploaded.',
    },
  ],
}
