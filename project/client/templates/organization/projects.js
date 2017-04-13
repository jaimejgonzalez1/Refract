import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './projects.html';

Meteor.subscribe('projects', Meteor.userId());

Template.projects.helpers({
    // get all the Users collection
    'projects': function () {
        return (Projects.find({owner_id: Meteor.userId()}).count());
    }
});

Template.existingProjects.helpers({
    // get all the Users collection
    'projects': function() {
        console.log(Projects.find());
        return Projects.find({owner_id: Meteor.userId()});
    },
    'students': function() {
        Meteor.subscribe('Meteorusers', this.applied);
        return Meteor.users.find(
            {profile: {
                type: "bb"
            }}
        );
    }
});

Template.addProject.events({
    'submit .addProjectSubmit'(evt) {
                evt.preventDefault();
                const form = evt.target;
                // console.log(new Date(form.expDate.value));
                // console.log(new Date());

                // Meteor.call('projects.insert', form);


                console.log(Projects.insert({
                    project_name: form.projectName.value,
                    project_desc: form.projectDesc.value,
                    date_added: new Date(),
                    date_expiry: new Date(form.expDate.value),
                    owner_id: Meteor.userId(),
                    applied: [],
                }));
    }
});
