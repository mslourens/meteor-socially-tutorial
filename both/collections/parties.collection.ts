import {Mongo} from 'meteor/mongo';
import {Party} from '../models/party.model';

export const Parties = new Mongo.Collection<Party>('parties');
