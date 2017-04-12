import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './studentregister.html';


Template.student_register.helpers({
});

Template.student_register.rendered = function(){
  $('.collapsible').collapsible();
}

Template.student_register.events({
    'submit .applyProjectSubmit'(event, wut) {
        event.preventDefault();
        console.log(event.target.project.value);
            console.log(Projects.update({_id: event.target.project.value}, {
                $push: { "applied": Meteor.userId() }
            }));
    }
});
