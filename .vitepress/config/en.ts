import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',
  description: 'Global Telecom Infrastructure Investment Platform Limited (GTIIP), incorporated in Singapore, serves as a specialized 5G network financing platform, offering financing services to telecom operators worldwide.Additionally, GTIIP directly invests in 4G and 5G wireless networks across Europe, Asia, Africa, and other countries.',

  themeConfig: {
    nav: [{
      text: 'About US',
      link: '/en/aboutus/',
      activeMatch: '/en/aboutus/'
    },
    {
      text: 'Contact US',
      link: '/en/contactus/',
      activeMatch: '/en/contactus/'
    }],


    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2019-${new Date().getFullYear()} GTIIP`
    }
  }
})


