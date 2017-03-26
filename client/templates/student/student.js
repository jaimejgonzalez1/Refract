import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './student.html';

Meteor.subscribe('projects_students');

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
        //value might be available in context???
        //check/make array and change to $push
            console.log(Meteor.user.update(Meteor.userId(), {
                $set: { profile: { "applied_projects": this._id } }
    }));
// );
}
});
