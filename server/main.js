import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { publishComposite } from 'meteor/reywood:publish-composite';
// import '../imports/acct-config.js';

import './publications/projectsPublish.js';

Projects = new Mongo.Collection('projects');

// create the three collections
// Roles = new Mongo.Collection('roles');
// Projects = new Mongo.Collection('projects');
// User_Skills = new Mongo.Collection('user_skills');
// Skills = new Mongo.Collection('skills');
// Project_Users = new Mongo.Collection('project_users');
// Project_Skills = new Mongo.Collection('project_skills');

Meteor.startup(() => {
    // code to run on server at startup
});
