
// All static data for the navbar: logo, links, animation variants

export const LOGO_URL =
  'https://res.cloudinary.com/dxvacpgrv/image/upload/v1734868184/UniverseSoftTech/Image/htnalzbw4rj4jigwrckj.png';

// "Get in Touch" dropdown items
export const TOUCH_LINKS = [
  { to: '/ceo-speech',      label: 'CEO Speech'      },
  { to: '/about-us',        label: 'About Us'         },
  { to: '/contact-us',      label: 'Contact Us'       },
  { to: '/career',          label: 'Career'           },
  { to: '/company-profile', label: 'Company Profile'  },
  { to: '/our-team',        label: 'Our Team'         },
  { to: '/blogs',           label: 'Blogs'            },
];

// Simple mobile drawer static links (Products/Services are accordions)
export const MOBILE_STATIC_LINKS = [
  { to: '/',          label: 'Home'      },
  { to: '/portfolio', label: 'Portfolio' },
];

// Framer Motion dropdown animation variants (desktop mega menu)
export const DROPDOWN_VARIANTS = {
  hidden:  { opacity: 0, y: -6, scale: 0.97, pointerEvents: 'none' },
  visible: { opacity: 1, y: 0,  scale: 1,    pointerEvents: 'auto',
             transition: { duration: 0.18, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -4, scale: 0.97, pointerEvents: 'none',
             transition: { duration: 0.12 } },
};

// Framer Motion accordion animation variants (mobile drawer)
export const ACCORDION_VARIANTS = {
  hidden:  { height: 0,      opacity: 0, overflow: 'hidden' },
  visible: { height: 'auto', opacity: 1, overflow: 'hidden',
             transition: { duration: 0.22, ease: 'easeOut' } },
  exit:    { height: 0,      opacity: 0, overflow: 'hidden',
             transition: { duration: 0.16 } },
};