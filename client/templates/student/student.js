import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './student.html';

Meteor.subscribe('projects_students');
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
            console.log(Meteor.users.update({_id: Meteor.userId()}, {
                $set: { "profile.applied_projects": event.target.project.value }
            }));
    }
});
