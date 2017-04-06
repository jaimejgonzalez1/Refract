import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './student.html';

Meteor.subscribe('projects');
// Projects = new Mongo.Collection('projects');

Template.student.helpers({
    'projects': function() {
        console.log(Projects.find().count());
        return Projects.find();
    },
});

Template.student.events({
    'submit .applyProjectSubmit'(event, wut) {
        event.preventDefault();
        console.log(event.target.project.value);
            console.log(Projects.update({_id: event.target.project.value}, {
                $push: { "applied": Meteor.userId() }
            }));
    }
});
