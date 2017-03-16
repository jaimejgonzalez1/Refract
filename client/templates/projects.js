import {
    Template
}
from 'meteor/templating';
import './projects.html';
Template.addProject.helpers({
    // get all the Users collection
    'projectContributors': function () {
        return Users.find();
    }
});
Template.addProject.events({
    'submit form': function () {
        event.preventDefault();
        // get everything from the form the lazy way
        var pName = event.target.projectName.value;
        var pDesc = event.target.projectDesc.value;
        var pUser = event.target.projectUser.value;
        var clientDate = event.target.clientDate.value;
        // insert into Projects collection
        Projects.insert({
            projectname: pName
            , description: pDesc
            , contributor: pUser
            , post_date: new Date()
            , exp_date: clientDate
        , });
    }
});
Template.projects.helpers({
    // get all projects from the Projects collection
    projects: function () {
        return Projects.find();
    }, // this gets called from an each loop, so this refers to a single project, and grabs the _id in contributor
    // to join it with the Users collection
    projectUser: function () {
        return Users.findOne(this.contributor);
    }
})