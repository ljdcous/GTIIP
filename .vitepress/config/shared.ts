import { defineConfig } from 'vitepress'


export const shared = defineConfig({
  title: 'GTIIP',
  base:'/GTIIP/',
  rewrites: {
    'en/:rest*': ':rest*'
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://ljdcous.github.io/GTIIP/',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/GTIIP-logo-mini.svg' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: 'GTIIP' }],
    ['meta', { property: 'og:site_name', content: 'GTIIP' }],
    ['meta', { property: 'og:url', content: 'https://ljdcous.github.io/GTIIP/' }],

  ],

  themeConfig: {
    logo: { src: '/GTIIP-logo-mini.svg', width: 24, height: 24 },
  }
})
