import {Parties} from '../../../both/collections/parties.collection';
import {Party} from '../../../both/models/party.model';

export function loadParties() {
  if (Parties.find().count() === 0) {
    [
      {
        name: 'Dubstep-Free Zone',
        description: 'Can we please just for an evening not listen to dubstep.',
        location: 'Palo Alto',
        public: true
      },  
      {
        name: 'All dubstep all the time',
        description: 'Get it on!',
        location: 'Palo Alto',
        public: true
      },
      {
        name: 'Savage lounging',
        description: 'Leisure suit required. And only fiercest manners.',
        location: 'San Francisco',
        public: true
      }
    ].forEach((party) => Parties.insert(party));
  }
}