import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './profile.html';


Template.profile.helpers({
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
});

Template.profile.rendered = function(){
  $('.collapsible').collapsible();
  Materialize.updateTextFields();
}

Template.profile.events({
    'submit #saveBlurb'(evt, wut) {
        evt.preventDefault();
        var text = evt.target[0].value;
        if (Meteor.users.update({_id: Meteor.userId()}, {$set:{"profile.blurb":text}})) {
        };
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
});