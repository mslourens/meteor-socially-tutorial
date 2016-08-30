import {Component, OnInit} from '@angular/core';
import template from './parties-list.component.html';
import {Party} from '../../../both/models';
import {Parties} from '../../../both/collections/parties.collection';
import {PartiesFormComponent} from './parties-form.component';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {LoginButtons} from 'angular2-meteor-accounts-ui';
import {MeteorComponent} from 'angular2-meteor';

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
export class PartiesListComponent extends MeteorComponent implements OnInit {
  parties:Mongo.Cursor<Party>;

  constructor(){
    super();
  }

  ngOnInit() {
    this.parties = <Mongo.Cursor<Party>>Parties.find();
    this.subscribe('parties', () => {
      this.parties = <Mongo.Cursor<Party>>Parties.find();
    })
  }

  search(location:string) {
    this.parties = <Mongo.Cursor<Party>>Parties.find(location ? {'location': location}: {});
  }

  remove(party:Party) {
    Parties.remove(party._id);
  }
}
