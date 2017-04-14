import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './dash.html';

Meteor.subscribe('projects', Meteor.userId());

Template.project_skills.helpers({
    'checked': function() {
        console.log(Session.get('open_project'));
        return _.contains(Projects.find(Session.get('open_project')).skills, this.id);
    },
    'parent_skills': function() {
        return Skills.find({parent_id: undefined});
    },
    'child_skills': function() {
        // console.log(this);
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
    },
    'change .proj-skill-input'(evt, wut) {
        // evt.preventDefault();
        console.log(this.id);
        // console.log(Session.set('open_project',''));
        console.log(Session.get('open_project'));
        console.log(Projects.findOne({'_id':Session.get('open_project')}));
        console.log(Projects.update({'_id':Session.get('open_project')},{$push:{'skills':this.id}}));
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
        return;
    },

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
    "click [data-action='link']": function () {
    // set current project
    console.log(this._id);
        Session.set('open_project', this._id)
    }
});

Template.project_edit.helpers({
    'open_project': function() {
        console.log(Projects.findOne(Session.get('open_project')));
        return Projects.findOne(Session.get('open_project'));
    },
});

Template.project_edit.events({
    'submit #launch_project'(evt, wut) {
        evt.preventDefault();
        Projects.update({'_id':Session.get('open_project')},{$set:{'status':'Launched'}});
        Projects.update({'_id':Session.get('open_project')},{$set:{'date_launched': new Date()}});
        // change status of project
        console.log('make this do something');
    },
    'keyup #project_name_edit'(evt, wut) {
        evt.preventDefault();
        console.log(Projects.update({'_id':Session.get('open_project')},{$set:{'project_name':evt.target.value}}));
    },
    'keyup #project_desc_edit'(evt, wut) {
        evt.preventDefault();
        console.log(Projects.update({'_id':Session.get('open_project')},{$set:{'project_desc':evt.target.value}}));
    },
    'change #expiry_date_edit'(evt, wut) {
        evt.preventDefault();
        console.log(evt);
        console.log(Projects.update({'_id':Session.get('open_project')},{$set:{'date_expiry':evt.target.valueAsDate}}));
    },
});

Template.project_view.helpers({
    'open_project': function() {
        console.log(Projects.findOne(Session.get('open_project')));
        return Projects.findOne(Session.get('open_project'));
    },
    'skills': function() {
        console.log(this.skills);
        console.log(Skills.findOne({}));
        console.log(Skills.findOne({'id': {'$in': this.skills}}));
        return Skills.find({'id': {'$in': this.skills}});
    }
});
