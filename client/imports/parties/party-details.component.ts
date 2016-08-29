import {Component, OnInit, NgZone} from '@angular/core';
import template from './party-details.component.html';
import {ActivatedRoute} from '@angular/router';
import {Parties} from '../../../both/collections/parties.collection';
import {Party} from '../../../both/models/party.model';
import {Tracker} from 'meteor/tracker';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'party-details',
  template,
  directives: [ROUTER_DIRECTIVES]
})
export class PartyDetailsComponent implements OnInit{
  partyId:string;
  party:Party;

  constructor(private route:ActivatedRoute, private ngZone:NgZone) {}

  ngOnInit() {
    this.route.params
      .map(params => params['partyId'])
      .subscribe(partyId => {
        this.partyId = partyId;
        Tracker.autorun(() => {
          this.ngZone.run(() => {
            this.party = <Party>Parties.findOne(this.partyId);
          });          
        });     
      });
  }
}