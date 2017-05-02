import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './profile.html';

Template.profile.helpers({
    'user': function() {
        return Meteor.user().profile;
    },
    'student_name': function() {
        return Meteor.user().username;
    },
    'blurb': function() {
        return Meteor.user().profile.blurb;
    },
    'linkedInLink': function() {
        return Meteor.user().profile.linkedInLink;
    },
    'profileLink': function() {
        return Meteor.user().profile.profileLink;
    },
    // 'skills': function() {
    //     console.log(this.skills);
    //     return Skills.find({'id': {'$in': this.skills}});
    // },
    'skills': function() {
        return Skills.find({'_id': {'$in': Meteor.users.findOne({_id:Session.get('selected_user')}).profile.skills_arr}});
    },
    'student_email': function() {
        return Meteor.user().emails[0].address;
    },

});

Template.profile.rendered = function(){
  $('.collapsible').collapsible();
  Materialize.updateTextFields();
}

Template.profile.events({
    'keyup #saveBlurb'(evt, wut) {
        evt.preventDefault();
        var text = evt.target.value;
        console.log(evt.currentTarget);
        // if (Meteor.users.update({_id: Meteor.userId()}, {$set:{"profile.blurb":text}})) {
        // };
        Meteor.users.update({_id: Meteor.userId()}, {$set:{"profile.blurb":text}});
    },
    'keyup #profileLink'(evt, wut) {
        evt.preventDefault();
        var text = evt.target.value;
        console.log(text);
        Meteor.users.update({_id: Meteor.userId()}, {$set:{"profile.profileLink":text}});
    },
    'keyup #linkedInLink'(evt, wut) {
        evt.preventDefault();
        var text = evt.target.value;
        console.log(text);
        Meteor.users.update({_id: Meteor.userId()}, {$set:{"profile.linkedInLink":text}});
    },
    'submit .save-profile'(evt) {
        evt.preventDefault();
    },
    'submit .view-profile'(evt) {
        evt.preventDefault();
        Session.set('selected_user', Meteor.user()._id);
        Session.set('last_template', Session.get('template_loaded'));
        Session.set('template_loaded', 'profile_view');
    },
    'click .close'(evt) {
        Meteor.users.update({_id: Meteor.userId()}, {$pull:{"profile.skills_arr":this._id}});
    }
});
