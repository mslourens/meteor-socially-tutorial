import {loadParties} from './imports/fixtures/parties.fixture';
import {Meteor} from 'meteor/meteor';
import './imports/publications/parties.publication';

Meteor.startup(() => {
  loadParties();
})
