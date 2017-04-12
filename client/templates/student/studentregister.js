import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './studentregister.html';


Template.student_register.helpers({
    'student_name': function() {
        return Meteor.user().username;
    },
});

Template.student_register.rendered = function(){
  $('.collapsible').collapsible();
}

Template.student_register.events({
    'submit #saveBlurb'(evt, wut) {
        evt.preventDefault();
        console.log(evt);
    },
});
