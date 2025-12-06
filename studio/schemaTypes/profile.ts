export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    { name: 'fullname', title: 'Full Name', type: 'string' },
    { name: 'nickname', title: 'Nickname', type: 'string' },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: 'Short professional summary shown on homepage.'
    },
    {
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' }
          ]
        }
      ]
    }
  ],
  preview: {
    select: { title: 'fullname', subtitle: 'nickname' }
  }
}
