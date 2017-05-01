import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './profile_view.html';

Template.profile_view.helpers({
    'selected_user': function() {
        Meteor.subscribe('Meteorusers', [Session.get('selected_user')]);
        console.log(Meteor.users.findOne(Session.get('selected_user')).profile);
        return Meteor.users.findOne(Session.get('selected_user')).profile;
    },
    'skills': function() {
        return Skills.find({'_id': {'$in': Meteor.users.findOne({_id:Session.get('selected_user')}).profile.skills_arr}});
    },
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
    // 'submit #saveBlurb'(evt, wut) {
    //     evt.preventDefault();
    //     var text = evt.target[0].value;
    //     if (Meteor.users.update({_id: Meteor.userId()}, {$set:{"profile.blurb":text}})) {
    //     };
    // },
    // 'keyup #profileLink'(evt, wut) {
    //     evt.preventDefault();
    //     var text = evt.target.value;
    //     console.log(text);
    //     Meteor.users.update({_id: Meteor.userId()}, {$set:{"profile.profileLink":text}});
    // },
    // 'keyup #linkedInLink'(evt, wut) {
    //     evt.preventDefault();
    //     var text = evt.target.value;
    //     console.log(text);
    //     Meteor.users.update({_id: Meteor.userId()}, {$set:{"profile.linkedInLink":text}});
    // },
});
