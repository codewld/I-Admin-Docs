module.exports = {
  lang: 'zh-CN',
  title: 'I-Admin-Docs',
  description: 'I-Admin = "少代码" = Spring Boot 后端 + Vue3 后台',
  base: '/I-Admin-Docs/',
  themeConfig: {
    repo: 'codewld/I-Admin',
    sidebar: [
      {text: '介绍', link: '/'},
      {text: '技术栈', link: '/technology-stack/'},
      {text: '更新日志', link: '/change-log/'},
      {
        text: '前端组件库',
        children: [
          {text: 'iCrud', link: '/front-end-components/iCrud'},
          {text: 'iContainer', link: '/front-end-components/iContainer'},
          {text: 'iCard', link: '/front-end-components/iCard'},
          {text: 'iStatus', link: '/front-end-components/iStatus'}
        ]
      },
    ],
    sidebarDepth: 0,
    editLink: false,
    contributors: false
  }
}
