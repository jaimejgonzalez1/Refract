import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './applicants.html';

Meteor.subscribe('Applicants');

Applicants = new Mongo.Collection('applicants');

Template.applicants.helpers({
    'applicants': function() {
        console.log(this._id);
        return Applicants.find(
            {project: this._id}
        );
    },
    'applicant': function() {
        console.log(this.applicant);
        Meteor.subscribe('Meteorusers', [this.applicant]);
        var profile = Meteor.users.findOne(this.applicant).profile;
        return `${profile.firstname} ${profile.lastname}`;    },
});

Template.applicants.rendered = function(){
}

Template.applicants.events({
    'change .skill-input'(evt, wut) {
        var data_context = this;
        var checked = evt.target.checked;
        if (checked) {
            if (Meteor.user().profile.skills_arr !== undefined) {
                // push into array
                Meteor.users.update({_id: Meteor.userId()}, {$push:{"profile.skills_arr":this._id}});
            } else {
                Meteor.users.update
                // create array
                Meteor.users.update({_id: Meteor.userId()}, {$set:{"profile.skills_arr":[]}});
                // push into array
                Meteor.users.update({_id: Meteor.userId()}, {$push:{"profile.skills_arr":this._id}});
            }
        }
            else {
                // pluck from array
                Meteor.users.update({_id: Meteor.userId()}, {$pull:{"profile.skills_arr":this._id}});
            }
        }
    });
