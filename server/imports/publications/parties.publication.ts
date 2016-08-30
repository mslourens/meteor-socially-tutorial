import {Parties} from '../../../both/collections/parties.collection';
import {Meteor} from 'meteor/meteor';
 
function buildQuery(partyId?:string):Object  {
  const selector = {  
    $or: [
      {
        'public': true
      },
      {
        $and: [
          {
            'owner': {
              $exists: true
            }
          },
          {
            'owner': this.userId
          }
        ]
      }
    ]
  };

  if (partyId) {
    return {$and: [{_id: partyId}, selector]}
  }

  return selector;
} 

Meteor.publish('parties', () => {
  return Parties.find(buildQuery());
});

Meteor.publish('party', (partyId:string) => {
  return Parties.find(buildQuery(partyId));
});