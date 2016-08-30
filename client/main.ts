import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { AppComponent } from './app.component';
import {disableDeprecatedForms, provideForms } from '@angular/forms';
import {APP_ROUTE_PROVIDERS} from './app.routes';

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTE_PROVIDERS
]);
