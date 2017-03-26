import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './projects.html';

// console.log(Meteor.userId());
Meteor.subscribe('projects', Meteor.userId());

// Projects = new Mongo.Collection('projects');

Template.projects.helpers({
    // get all the Users collection
    'projects': function () {
        console.log(Projects.find().count());

        return (Projects.find().count());
    }
});
Template.existingProjects.helpers({
    // get all the Users collection
    'projects': function () {
        console.log(Projects.find());
        return Projects.find();
    }
});

Template.addProject.events({
    'submit .addProjectSubmit'(event) {
                event.preventDefault();
                const form = event.target;
                // console.log(new Date(form.expDate.value));
                // console.log(new Date());

                // Meteor.call('projects.insert', form);


                console.log(Projects.insert({
                    project_name: form.projectName.value,
                    project_desc: form.projectDesc.value,
                    date_added: new Date(),
                    date_expiry: new Date(form.expDate.value),
                    owner_id: Meteor.userId(),
                }));
    }
});
