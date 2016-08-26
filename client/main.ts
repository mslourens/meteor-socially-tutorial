import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { AppComponent } from './app/app.component';
import {disableDeprecatedForms, provideForms } from '@angular/forms';

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms()
]);
