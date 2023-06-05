import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

const tjenesterLinks = {
  text: 'Tjenester',
  links: [
    {
      text: 'E - handel',
      href: '#',
    },
    {
      text: 'B2C - nettbutikk',
      href: '#',
    },
    {
      text: 'B2B - nettbutikk',
      href: '#',
    },
    {
      text: 'Markedsplass',
      href: '#',
    },
    {
      text: 'Shopify',
      href: '#',
    },
    {
      text: 'Vendure',
      href: '#',
    },
  ],
};

const integrasjonerLinks = {
  text: 'Integrasjoner',
  links: [
    { text: 'Visma', href: '#' },
    { text: 'Tripletex', href: '#' },
    { text: 'Fiken', href: '#' },
  ],
};

export const headerData = {
  links: [
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Sass',
    //       href: getPermalink('/landing/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/landing/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/landing/mobile-app'),
    //     },
    //   ],
    // },
    tjenesterLinks,
    integrasjonerLinks,
    {
      text: 'Blogg',
      href: getBlogPermalink(),
    },
    {
      text: 'Kontakt oss',
      href: '/contact',
    },
    {
      text: 'Om oss',
      href: '/about',
    },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features',
    //       href: '#',
    //     },
    //     {
    //       text: 'Pricing',
    //       href: '#',
    //     },
    //     {
    //       text: 'About us',
    //       href: '#',
    //     },
    //     {
    //       text: 'Contact',
    //       href: '#',
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
  ],
  /*  actions: [
    { type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }
  ], */
};

export const footerData = {
  links: [
    { ...tjenesterLinks, ...{ title: tjenesterLinks.text } },
    { ...integrasjonerLinks, ...{ title: integrasjonerLinks.text } },
    {
      title: 'Support',
      links: [
        { text: 'Kontakt oss', href: '/contact' },
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
        { text: 'Om oss', href: '/about' },
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
