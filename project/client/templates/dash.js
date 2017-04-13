import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './dash.html';

Meteor.subscribe('projects', Meteor.userId());

// Projects.find({owner_id: Meteor.userId()}).count()

Template.project_skills.helpers({
    'checked': function() {
        return _.contains(Meteor.user().profile.skills_arr, this.id);
    },
    'parent_skills': function() {
        return Skills.find({parent_id: undefined});
    },
    'child_skills': function() {
        console.log(this);
        return Skills.find({parent_id: this.id});
    },
});

Template.project_skills.rendered = function(){
  $('.collapsible').collapsible();
  Materialize.updateTextFields();
}

Template.project_skills.events({
    'submit #launch_project'(evt, wut) {
        evt.preventDefault();
        // change status of project
    }
});

Template.dash_nav.helpers({
    'projects_owned': function() {
        // get projects owned
        return Projects.find({owner_id: Meteor.userId()});
    },
    'projects_applied': function() {
        // get projects owned
        return;
    }

});

Template.dash_nav.events({
    'submit #new_project'(evt, wut) {
        evt.preventDefault();
        console.log(evt);
        console.log(Projects.insert({
            project_name: "Default name",
            project_desc: "Default description",
            date_added: new Date(),
            date_expiry: new Date(),
            owner_id: Meteor.userId(),
            skills: [],
            status: "",
            applicants: [],
        }));
    }
})
