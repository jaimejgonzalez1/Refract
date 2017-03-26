import { Template } from 'meteor/templating';

import '../../imports/acct-config.js';

import './body.html';

Projects = new Mongo.Collection('projects');


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