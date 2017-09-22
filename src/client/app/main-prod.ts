/**
 * Bootstraps the application and makes the ROUTER_PROVIDERS and the APP_BASE_HREF available to it.
 * @see https://angular.io/docs/ts/latest/api/platform-browser-dynamic/index/bootstrap-function.html
 */
import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from './app.module.ngfactory';

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

// In order to start the Service Worker located at "/worker-basic.min.js"
// uncomment this line. More about Service Workers here
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
//
// if ('serviceWorker' in navigator) {
//   (<any>navigator).serviceWorker.register('/worker-basic.min.js').then((registration: any) =>
//       console.log('ServiceWorker registration successful with scope: ', registration.scope))
//     .catch((err: any) =>
//       console.log('ServiceWorker registration failed: ', err));
// }

var Module = require('ngx-openlayers');
var originalRequire = Module.prototype.require;

Module.prototype.require = function(){
  //do your thing here
  if (arguments[0] === './components'
    || arguments[0] === './controls'
    || arguments[0] === './formats'
    || arguments[0] === './interactions'
    || arguments[0] === './layers'
    || arguments[0] === './sources'
    || arguments[0] === './styles'
    || arguments[0] === '../controls'
    || arguments[0] === '../formats'
    || arguments[0] === '../interactions'
    || arguments[0] === '../layers'
    || arguments[0] === '../sources'
    || arguments[0] === '../styles') {
      arguments[0] = arguments[0]+'/index.js';
  }
  return originalRequire.apply(this, arguments);
};
