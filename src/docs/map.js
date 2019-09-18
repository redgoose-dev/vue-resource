/**
 * side navigation tree
 */

export default [
  { link: '/', title: 'Introduce' },
  {
    title: 'Framework',
    items: [
      { link: '/framework/vue', title: 'Vue.js notes' },
      { link: '/framework/nuxt', title: 'Nuxt.js notes' },
    ],
  },
  {
    title: 'Stylesheet',
    items: [
      { link: '/stylesheet', title: 'introduce' },
      { link: '/stylesheet/normalize', title: 'normalize' },
      { link: '/stylesheet/web-fonts', title: 'web fonts' },
      { link: '/stylesheet/variables', title: 'variables' },
      { link: '/stylesheet/mixins', title: 'mixins' },
      { link: '/stylesheet/elements', title: 'elements' },
      { link: '/stylesheet/grid', title: 'grid' },
      { link: '/stylesheet/typography', title: 'typography' },
      { link: '/stylesheet/forms', title: 'forms' },
      { link: '/stylesheet/table', title: 'table' },
      { link: '/stylesheet/etc', title: 'etc' },
    ],
  },
  {
    title: 'Components',
    items: [
      { link: '/components/icon', title: 'icon' },
      { link: '/components/card', title: 'card' },
      {
        title: 'Button',
        items: [
          { link: '/components/button/basic', title: 'basic' },
        ],
      },
      {
        title: 'Form',
        items: [
          { link: '/components/form/text', title: 'text' },
          { link: '/components/form/select', title: 'select' },
          { link: '/components/form/select-wrapper', title: 'select-wrapper' },
          { link: '/components/form/radio', title: 'radio' },
          { link: '/components/form/checkbox', title: 'checkbox' },
          { link: '/components/form/switch', title: 'switch' },
        ],
      },
      {
        title: 'Navigation',
        items: [
          { link: '/components/navigation/pagination', title: 'pagination' },
          { link: '/components/navigation/tab', title: 'tab' },
          { link: '/components/navigation/dropdown', title: 'dropdown' },
        ],
      },
      {
        title: 'Modal',
        items: [
          { link: '/components/modal/basic', title: 'basic' },
        ],
      },
      {
        title: 'Loading',
        items: [
          { link: '/components/loading/basic', title: 'basic' },
          { link: '/components/loading/progress', title: 'progress' },
        ],
      },
      {
        title: 'Error',
        items: [
          { link: '/components/error/content', title: 'content' },
          { link: '/components/error/page', title: 'page' },
        ],
      },
    ],
  },
  {
    title: 'Script library',
    items: [
      { link: '/scripts/sleep', title: 'sleep' },
      { link: '/scripts/custom-event', title: 'custom event' },
      { link: '/scripts/api', title: 'support axios api' },
    ],
  },
];
