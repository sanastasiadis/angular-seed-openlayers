import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
      {src: 'ngx-openlayers/dist/index.js', inject: 'libs'}
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    // Add packages (e.g. ng2-translate)
    // let additionalPackages: ExtendPackages[] = [{
    //   name: 'ng2-translate',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
    // }];
    //
    // this.addPackagesBundles(additionalPackages);

    let additionalPackages: ExtendPackages[] = [
      {
          name: 'ngx-openlayers',
          path: 'node_modules/ngx-openlayers/dist/index.js'
      },
      {
          name: 'ngx-openlayers/dist/components',
          path: 'node_modules/ngx-openlayers/dist/components',
          packageMeta: {
              main: './index.js',
              defaultExtension: 'js'
          }
      },
      {
          name: 'ngx-openlayers/dist/components/controls',
          path: 'node_modules/ngx-openlayers/dist/components/controls',
          packageMeta: {
              main: './index.js',
              defaultExtension: 'js'
          }
      },
      {
          name: 'ngx-openlayers/dist/components/formats',
          path: 'node_modules/ngx-openlayers/dist/components/formats',
          packageMeta: {
              main: './index.js',
              defaultExtension: 'js'
          }
      },
      {
          name: 'ngx-openlayers/dist/components/interactions',
          path: 'node_modules/ngx-openlayers/dist/components/interactions',
          packageMeta: {
              main: './index.js',
              defaultExtension: 'js'
          }
      },
      {
          name: 'ngx-openlayers/dist/components/layers',
          path: 'node_modules/ngx-openlayers/dist/components/layers',
          packageMeta: {
              main: './index.js',
              defaultExtension: 'js'
          }
      },
      {
          name: 'ngx-openlayers/dist/components/sources',
          path: 'node_modules/ngx-openlayers/dist/components/sources',
          packageMeta: {
              main: './index.js',
              defaultExtension: 'js'
          }
      },
      {
          name: 'ngx-openlayers/dist/components/styles',
          path: 'node_modules/ngx-openlayers/dist/components/styles',
          packageMeta: {
              main: './index.js',
              defaultExtension: 'js'
          }
      },
      {
          name: 'openlayers',
          path: 'node_modules/openlayers/dist/ol.js'
      }
    ];
    this.addPackagesBundles(additionalPackages);

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
