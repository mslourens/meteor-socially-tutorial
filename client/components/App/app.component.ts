import {Component, OnInit} from '@angular/core';
import template from './app.component.html';
import {Party} from '../../models';
import {Parties} from '../../../both/collections/parties.collection';

@Component({
  selector: 'app',
  template,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  parties:Mongo.Cursor<Party>;

  constructor(){}

  ngOnInit() {
    this.parties = <Mongo.Cursor<Party>>Parties.find();
  }
}
