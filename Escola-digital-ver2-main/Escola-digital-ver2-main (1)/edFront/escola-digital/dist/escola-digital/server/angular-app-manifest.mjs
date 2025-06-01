
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 963, hash: '33b15de3194c07b1c1936b2d23991257253a9d566f4f443d3c24e41db546d9c8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1172, hash: 'e25d1db1c2549dfea8af0d5810a180a579daa57b2b766af47981a693d285a3df', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JU3QXN5V.css': {size: 1244, hash: 'ForQfz+WwlE', text: () => import('./assets-chunks/styles-JU3QXN5V_css.mjs').then(m => m.default)}
  },
};
