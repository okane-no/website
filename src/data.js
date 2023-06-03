import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Landing',
      links: [
        {
          text: 'Sass',
          href: getPermalink('/landing/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/landing/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/landing/mobile-app'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features',
          href: '#',
        },
        {
          text: 'Pricing',
          href: '#',
        },
        {
          text: 'About us',
          href: '#',
        },
        {
          text: 'Contact',
          href: '#',
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
 /*  actions: [
    { type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }
  ], */
};

export const footerData = {
  links: [
    {
      title: 'Tjenester',
      links: [
        { text: 'Shopify', href: '#' },
        { text: 'Vendure', href: '#' },
      ],
    },
    {
      title: 'Integrasjoner',
      links: [
        { text: 'Visma', href: '#' },
        { text: 'Tripletex', href: '#' },
        { text: 'Fiken', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Kontakt oss', href: '#' },
        // { text: 'Community Forum', href: '#' },
        // { text: 'Professional Services', href: '#' },
        // { text: 'Skills', href: '#' },
        // { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Selskap',
      links: [
        { text: 'Blogg', href: '#' },
        { text: 'Om oss', href: '#' },
        // { text: 'Careers', href: '#' },
        // { text: 'Press', href: '#' },
        // { text: 'Inclusion', href: '#' },
        // { text: 'Social Impact', href: '#' },
        // { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Personvernserklæring', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/okane-no/website' },
  ],
  footNote: `
    Levert av <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://okane.no/"> Okane AS</a> · Alle rettigheter forbeholdt 	&copy; Okane
  `,
};
