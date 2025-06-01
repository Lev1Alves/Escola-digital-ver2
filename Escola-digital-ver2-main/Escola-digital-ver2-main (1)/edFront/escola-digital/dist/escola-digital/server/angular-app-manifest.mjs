
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 831, hash: '8cc207c55908c51db241a172c120e5727ab2879e6552ba1491a9339801883b42', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1040, hash: '3a2ea7a61ad26386fef3fc92f3c2e062451548563aa5aa8ce7c2bd24e62099b2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JU3QXN5V.css': {size: 1244, hash: 'ForQfz+WwlE', text: () => import('./assets-chunks/styles-JU3QXN5V_css.mjs').then(m => m.default)}
  },
};
