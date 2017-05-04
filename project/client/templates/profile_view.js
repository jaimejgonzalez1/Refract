import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './profile_view.html';

Template.profile_view.helpers({
    'selected_user': function() {
        Meteor.subscribe('Meteorusers', [Session.get('selected_user')]);
        console.log(Meteor.users.findOne(Session.get('selected_user')));
        return Meteor.users.findOne(Session.get('selected_user'));
    },
    'skills': function() {
        return Skills.find({'_id': {'$in': Meteor.users.findOne({_id:Session.get('selected_user')}).profile.skills_arr}});
    },
    'isOwner': function() {
        return (Session.get('selected_user') == Meteor.user()._id);
    }
    // 'student_name': function() {
    //     return Meteor.user().username;
    // },
    // 'blurb': function() {
    //     return Meteor.user().profile.blurb;
    // },
    // 'linkedInLink': function() {
    //     return Meteor.user().profile.linkedInLink;
    // },
    // 'profileLink': function() {
    //     return Meteor.user().profile.profileLink;
    // },
});

Template.profile_view.rendered = function(){
  $('.collapsible').collapsible();
  Materialize.updateTextFields();
}

Template.profile_view.events({
    'submit .edit-profile'(evt) {
        evt.preventDefault();
        Session.set('selected_user', Meteor.user()._id);
        Session.set('last_template', Session.get('template_loaded'));
        Session.set('template_loaded', 'profile');
    }
});
