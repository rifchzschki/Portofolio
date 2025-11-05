export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }]
    },
    { name: 'contributors', title: 'Contributors', type: 'array', of: [{ type: 'string' }] },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'coverImages', title: 'Cover Images', type: 'array', of: [{ type: 'image' }] },
    { name: 'githubLink', title: 'GitHub Link', type: 'url' },
    { name: 'deployedLink', title: 'Deployed Link', type: 'url' },
    {
      name: 'images',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      name: 'articles',
      title: 'Articles (.md)',
      type: 'array',
      of: [{ type: 'articleMarkdown' }]
    }
  ],
  preview: {
    select: { title: 'title', subtitle: 'techStack', media: 'coverImages.0' }
  }
}
