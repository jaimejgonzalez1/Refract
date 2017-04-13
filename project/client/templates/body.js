import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import '../../imports/acct-config.js';

import './body.html';

Projects = new Mongo.Collection('projects');
// Users = new Mongo.Collection('users');


Template.body.helpers({
    isLoggedIn() {
        return (Meteor.user()?true:false);
    },
    isOrg() {
        return (Meteor.user().profile.type === "aa");
    },
    isStudent() {
        return (Meteor.user().profile.type === "bb");
    },
});

Template.body.events({
    'submit .logout'(evt) {
        evt.preventDefault();
        //add callback later
        console.log(evt);
        Meteor.logout();
    }
});
