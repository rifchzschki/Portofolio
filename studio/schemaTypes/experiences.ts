export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    { name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    { name: 'roleName', title: 'Role Name', type: 'string' },
    { name: 'organization', title: 'Organization', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'yearMonthFrom', title: 'Start (YYYY-MM)', type: 'string' },
    { name: 'yearMonthTo', title: 'End (YYYY-MM)', type: 'string' },
    { name: 'isITrelated', title: 'IT Related?', type: 'boolean' },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'article',
      title: 'Detailed Article (.md)',
      type: 'articleMarkdown'
    }
  ],
  preview: {
    select: { title: 'roleName', subtitle: 'organization', media: 'coverImage' }
  }
}
