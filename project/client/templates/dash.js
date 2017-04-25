import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './dash.html';

Meteor.subscribe('projects', Meteor.userId());
Meteor.subscribe('files.images.all');

Template.dash_nav.rendered = function() {
    $('ul.tabs').tabs();
  }

Template.dash.helpers({
    isOrg() {
        return (Meteor.user().profile.type === "aa");
    },
    isStudent() {
        return (Meteor.user().profile.type === "bb");
    },
});

Template.dash_nav.helpers({
    'has_projects': function() {
        console.log(Projects.findOne({owner_id: Meteor.userId()}));
        if (Projects.findOne({owner_id: Meteor.userId()}) == undefined) return false;
        else return true;
    },
    'projects_owned': function() {
        // get projects owned
        return Projects.find({owner_id: Meteor.userId()});
    },
    'projects_applied': function() {
        // get projects owned
        return Projects.find({owner_id: Meteor.userId()});
    },
    'projects_saved': function() {
        // get projects owned
        return Projects.find({owner_id: Meteor.userId()});
    },
    'projects_inprogress': function() {
        // get projects owned
        return Projects.find({owner_id: Meteor.userId()});
    },
    'student_name': function() {
        return Meteor.user().username;
    }

});

Template.dash_nav.events({
    'submit #new_project'(evt, wut) {
        evt.preventDefault();
        console.log(Projects.insert({
            project_name: "Default name",
            project_desc: "Default description",
            date_added: new Date(),
            date_expiry: new Date(),
            date_launched: new Date(),
            owner_id: Meteor.userId(),
            skills: [],
            status: "Created",
            applicants: [],
        }));
    },
    "click [data-action='link']": function (evt) {
    // set current project
    // load template
    console.log(evt.target.dataset.searchType);
    Session.set('search_type', evt.target.dataset.searchType);
    Session.set('template_loaded', evt.target.dataset.template);
    }
});
