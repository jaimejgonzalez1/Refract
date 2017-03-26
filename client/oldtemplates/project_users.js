import {
    Template
}
from 'meteor/templating';
import './project_users.html';
Template.addProject_user.helpers({
    // get all the Users collection
    'projects_users': function () {
        return Projects.find();
    }
    , 'projectContributors': function () {
        return Users.find();
    }
});
Template.addProject_user.events({
    'submit form': function () {
        event.preventDefault();
        // get everything from the form the lazy way
        var pUser = event.target.Project_Users.value;
        var check = event.target.status.value;
        var User = event.target.projectUsers.value;
        // insert into Projects collection
        Project_Users.insert({
            project_id: pUser
            , status: check
            , user_id: User
        , });
    }
});
Template.project_users.helpers({
    // get all projects from the Projects collection
    projects_users: function () {
        return Project_Users.find();
    }, // this gets called from an each loop, so this refers to a single project, and grabs the _id in contributor
    // to join it with the Users collection
    project_use: function () {
        return Projects.findOne(this.project_id);
    }
})