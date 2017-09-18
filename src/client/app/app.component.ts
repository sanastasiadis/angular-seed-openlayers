import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import { MapComponent } from 'angular2-openlayers';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
