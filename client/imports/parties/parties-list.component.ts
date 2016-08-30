import {Component, OnInit} from '@angular/core';
import template from './parties-list.component.html';
import {Party} from '../../../both/models';
import {Parties} from '../../../both/collections/parties.collection';
import {PartiesFormComponent} from './parties-form.component';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {LoginButtons} from 'angular2-meteor-accounts-ui';

@Component({
  selector: 'parties-list',
  template,
  styleUrls: ['./parties-list.component.css'],
  directives: [
    PartiesFormComponent, 
    ROUTER_DIRECTIVES, 
    LoginButtons
  ]
})
export class PartiesListComponent implements OnInit {
  parties:Mongo.Cursor<Party>;

  constructor(){}

  ngOnInit() {
    this.parties = <Mongo.Cursor<Party>>Parties.find();
  }

  remove(party:Party) {
    Parties.remove(party._id);
  }
}
