import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './project_edit.html';

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
        console.log(this._id);
        console.log(Projects.update({'_id':this._id},{$set:{'project_name':evt.target.value}}));
    },
    'keyup #project_desc_edit'(evt, wut) {
        evt.preventDefault();
        console.log(Projects.update({'_id':this._id},{$set:{'project_desc':evt.target.value}}));
    },
    'change #expiry_date_edit'(evt, wut) {
        evt.preventDefault();
        console.log(evt);
        console.log(Projects.update({'_id':this._id},{$set:{'date_expiry':evt.target.valueAsDate}}));
    },
});

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
