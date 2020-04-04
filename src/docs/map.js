/**
 * side navigation tree
 */

export default [
  { link: '/', title: 'Introduce' },
  {
    title: 'Stylesheet',
    items: [
      { link: '/stylesheet', title: 'introduce' },
      { link: '/stylesheet/normalize', title: 'normalize' },
      { link: '/stylesheet/web-fonts', title: 'web-fonts' },
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
        title: 'Forms',
        items: [
          { link: '/components/forms/text', title: 'text' },
          { link: '/components/forms/select', title: 'select' },
          { link: '/components/forms/select-wrapper', title: 'select-wrapper' },
          { link: '/components/forms/radio', title: 'radio' },
          { link: '/components/forms/checkbox', title: 'checkbox' },
          { link: '/components/forms/switch', title: 'switch' },
        ],
      },
      {
        title: 'Navigation',
        items: [
          { link: '/components/navigation/paginate', title: 'paginate' },
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
        title: 'Text',
        items: [
          { link: '/components/text/change-number', title: 'change-number' },
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
    title: 'Scripts',
    items: [
      { link: '/scripts/introduce', title: 'introduce' },
      { link: '/scripts/api', title: 'support API' },
    ],
  },
];
