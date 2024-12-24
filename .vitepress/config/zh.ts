import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '全球电信基础设施投资平台有限公司 （简称：GTIIP ），在新加坡注册成立，是专业的5G网络融资平台 ，为各国电信运营商提供融资服务。GTIIP也直接投资在欧洲、亚洲、非洲等国家的4G，5G无线网络。',

  themeConfig: {
    nav: [{
      text: '关于我们',
      link: '/zh/aboutus/',
      activeMatch: '/zh/aboutus/'
    },
    {
      text: '联系我们',
      link: '/zh/contactus/',
      activeMatch: '/zh/contactus/'
    }],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} GTIIP`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  }
})
