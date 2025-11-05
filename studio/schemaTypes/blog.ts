export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'shortDesc', title: 'Short Description', type: 'text' },
    { name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'article',
      title: 'Content (.md)',
      type: 'articleMarkdown'
    }
  ],
  preview: {
    select: { title: 'title', subtitle: 'shortDesc', media: 'coverImage' }
  }
}
