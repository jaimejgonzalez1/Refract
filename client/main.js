import {
    Template
}
from 'meteor/templating';
import {
    ReactiveVar
}
from 'meteor/reactive-var';
// create the collections on the client
Users = new Mongo.Collection('users');
Roles = new Mongo.Collection('roles');
Projects = new Mongo.Collection('projects');
User_Skills = new Mongo.Collection('user_skills');
Skills = new Mongo.Collection('skills');
Project_Users = new Mongo.Collection('project_users');
Project_Skills = new Mongo.Collection('project_skills');
// set up the projectUsers subscription (in server > publications > users.js) 
Meteor.subscribe('projectUsers');
Meteor.subscribe('user_Skills');
Meteor.subscribe('project_users');
Meteor.subscribe('project_skills');
import './main.html';