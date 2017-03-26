import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { publishComposite } from 'meteor/reywood:publish-composite';
import '../imports/acct-config.js';


// create the three collections
// Users = new Mongo.Collection('users2');
// Roles = new Mongo.Collection('roles');
// Projects = new Mongo.Collection('projects');
// User_Skills = new Mongo.Collection('user_skills');
// Skills = new Mongo.Collection('skills');
// Project_Users = new Mongo.Collection('project_users');
// Project_Skills = new Mongo.Collection('project_skills');

Meteor.startup(() => {
    // code to run on server at startup
});
