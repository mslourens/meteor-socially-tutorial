import {Component, OnInit} from '@angular/core';
import template from './parties-form.component.html';
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Parties} from '../../../both/collections/parties.collection';
import {Party} from '../../../both/models/party.model';


@Component({
  selector: 'parties-form',
  template,
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class PartiesFormComponent implements OnInit{
  addForm:FormGroup;

  constructor(private formBuilder:FormBuilder) {}

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
      Parties.insert(this.addForm.value);
    }
    this.resetForm();
  }
}
