import {Component, OnInit} from '@angular/core';
import template from './parties-form.component.html';
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Parties} from '../../../both/collections/parties.collection';
import {Party} from '../../../both/models/party.model';
import {Meteor} from 'meteor/meteor';
import {InjectUser} from 'angular2-meteor-accounts-ui';
import {MeteorComponent} from 'angular2-meteor';

@Component({
  selector: 'parties-form',
  template,
  directives: [REACTIVE_FORM_DIRECTIVES]
})
@InjectUser('user')
export class PartiesFormComponent extends MeteorComponent implements OnInit {
  addForm:FormGroup;
  user:Meteor.User;

  constructor(private formBuilder:FormBuilder) {
    super();
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [],
      location: ['', Validators.required]
    })
  };

  resetForm() {
    this.addForm.controls['name']['updateValue']('');
    this.addForm.controls['description']['updateValue']('');
    this.addForm.controls['location']['updateValue']('');
 }

  add() {
    console.log(this.addForm.value);

    if (this.addForm.valid) {
      if (Meteor.userId()) {
        Parties.insert(Object.assign({}, this.addForm.value, {owner: Meteor.userId()}));
        this.resetForm();
      } else {
        alert('Please log in to add a party');
      }
    }   
  }
}
