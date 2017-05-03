import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './project_edit.html';

Template.project_edit.helpers({
    'open_project': function() {
        console.log(Projects.findOne(Session.get('open_project')));
        return Projects.findOne(Session.get('open_project'));
    },
    'date': function(thing) {
        console.log(thing);
        var addZero = function(y) {
            var x = y.toString();
            console.log(((x.length < 2) ? '0'+x : x));
            return ((x.length < 2) ? `0${x}` : x);
        }
        console.log(`${thing.getFullYear()}-${addZero(thing.getMonth()+1)}-${addZero(thing.getDate())}`);
        return `${thing.getFullYear()}-${addZero(thing.getMonth()+1)}-${addZero(thing.getDate())}`;
    }
});

Template.project_edit.events({
    'submit #launch_project'(evt, wut) {
        evt.preventDefault();
        Projects.update({'_id':Session.get('open_project')},{$set:{'status':'launched'}});
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
    'keyup #hours'(evt,wut){
      evt.preventDefault();
      console.log(Projects.update({'_id':this._id},{$set:{'est_hours':evt.target.value}}));
    },
    'change #expiry_date_edit'(evt, wut) {
        evt.preventDefault();
        console.log(evt);
        console.log(Projects.update({'_id':this._id},{$set:{'date_expiry':evt.target.valueAsDate}}));
    },
});

Template.project_skills.helpers({
    'checked': function() {
        if (_.contains(Projects.findOne(Session.get('open_project')).skills, this._id)) {
            return 'checked';
        }
    },
    'parent_skills': function() {
        return Skills.find({parent_id: undefined});
    },
    'child_skills': function() {
        // console.log(this);
        return Skills.find({parent_id: this._id});
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
        console.log(this._id);
        // console.log(Session.set('open_project',''));
        console.log(Session.get('open_project'));
        console.log(Projects.findOne({'_id':Session.get('open_project')}));
        if (!(_.has(Projects.findOne({'_id':Session.get('open_project')}), 'skills'))) {
            Projects.update({'_id':Session.get('open_project')},{$set:{'skills':[]}});
            // Meteor.users.update({_id: Meteor.userId()}, {$set:{"profile.saved":[]}})
        }
        if (!(_.contains(Projects.findOne({'_id':Session.get('open_project')}).skills, this._id))) {
            console.log(Projects.update({_id: Session.get('open_project')}, {$push:{"skills":this._id}}));
            console.log('push');
        } else {
            console.log(Projects.update({_id: Session.get('open_project')}, {$pull:{"skills":this._id}}));
            console.log('pull');
        }
        console.log(this);
        // console.log(Projects.update({'_id':Session.get('open_project')},{$push:{'skills':this._id}}));
    },
});
