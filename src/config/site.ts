/**
 * Site configuration
 */
export const siteConfig = {
  name: 'PDF Kuansing',
  description: 'Perangkat pengolah PDF berbasis peramban untuk kebutuhan pemerintahan Kabupaten Kuantan Singingi. Aman, privat, dan berjalan sepenuhnya di perangkat lokal.',
  url: 'https://pdfkuansing.example.com',
  ogImage: '/images/og-image.png',
  links: {
    github: 'https://github.com/Masriadi/pdf-kuansing',
    twitter: '',
  },
  creator: 'Diskominfo Kabupaten Kuantan Singingi',
  keywords: [
    'PDF tools',
    'PDF editor',
    'merge PDF',
    'split PDF',
    'compress PDF',
    'convert PDF',
    'PDF Kuansing',
    'Kuansing',
    'Kuantan Singingi',
    'browser-based PDF',
    'private PDF processing',
  ],
  // SEO-related settings
  seo: {
    titleTemplate: '%s | PDF Kuansing',
    defaultTitle: 'PDF Kuansing - Perangkat PDF Aparatur',
    twitterHandle: '',
    locale: 'id_ID',
  },
};

/**
 * Navigation configuration
 */
export const navConfig = {
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'Tools', href: '/tools' },
    { title: 'About', href: '/about' },
    { title: 'FAQ', href: '/faq' },
  ],
  footerNav: [
    { title: 'Privacy', href: '/privacy' },
    { title: 'Terms', href: '/terms' },
    { title: 'Contact', href: '/contact' },
  ],
};
