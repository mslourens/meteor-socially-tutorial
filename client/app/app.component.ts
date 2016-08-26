import {Component, OnInit} from '@angular/core';
import template from './app.component.html';
import {Party} from '../../both/models';
import {Parties} from '../../both/collections/parties.collection';
import {PartiesFormComponent} from '../imports/parties/parties-form.component';

@Component({
  selector: 'app',
  template,
  styleUrls: ['./app.component.css'],
  directives: [PartiesFormComponent]
})
export class AppComponent implements OnInit {
  parties:Mongo.Cursor<Party>;

  constructor(){}

  ngOnInit() {
    this.parties = <Mongo.Cursor<Party>>Parties.find();
  }

  remove(party:Party) {
    Parties.remove(party._id);
  }
}
