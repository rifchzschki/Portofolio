import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'problem',
      title: 'Problem Statement',
      type: 'text',
    }),

    defineField({
      name: 'solution',
      title: 'Solution Summary',
      type: 'text',
    }),

    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Primary cover/preview image for the project',
    }),

    defineField({
      name: 'featured',
      title: 'Featured Project?',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),

    defineField({
      name: 'liveUrl',
      title: 'Live Demo URL',
      type: 'url',
    }),

    defineField({
      name: 'images',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'image'}],
      description: 'Optional gallery images for project detail page',
    }),

    defineField({
      name: 'priority',
      title: 'Priority Order',
      type: 'number',
      description: 'Semakin kecil angkanya, semakin atas urutannya',
      initialValue: 100,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'techStack',
      media: 'thumbnail',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: subtitle ? subtitle.join(', ') : '',
        media,
      }
    },
  },
})
