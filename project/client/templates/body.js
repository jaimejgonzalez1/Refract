import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import '../../imports/acct-config.js';

import './body.html';
import './sign_in.html';

Projects = new Mongo.Collection('projects');
// Users = new Mongo.Collection('users');

Template.myAtForm.replaces("atForm");

Template.body.helpers({
    isLoggedIn() {
        return (Meteor.user()?true:false);
    },
});

Template.body.events({
});

Template.body.rendered = function() {
    Session.set('template_loaded', 'list_projects');
    Session.set('search_type', 'launched');
    Session.set('selected_user', Meteor.user()._id);
    Session.set('last_template', 'profile_view');
};
