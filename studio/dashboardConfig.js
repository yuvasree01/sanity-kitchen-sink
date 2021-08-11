export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6113557936336b68a050b172',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mafcp4ac',
                  apiId: '2969816e-8105-4064-b1ef-5b2ef8df9283'
                },
                {
                  buildHookId: '611355794d4c2e5fc3136d1b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4fym7nb3',
                  apiId: '0b8b88d4-bc7a-46bf-8d81-1da388340288'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yuvasree01/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4fym7nb3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
