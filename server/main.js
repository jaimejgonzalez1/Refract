import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import './publications/projectsPublish.js';

Projects = new Mongo.Collection('projects');

Meteor.startup(() => {
    // code to run on server at startup
});
