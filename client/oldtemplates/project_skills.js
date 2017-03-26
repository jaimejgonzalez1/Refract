import {
    Template
}
from 'meteor/templating';
import './project_skills.html';
Template.addProject_skill.helpers({
    // get all the Users collection
    'projects_users': function () {
        return Projects.find();
    }
    , 'projectSkills': function () {
        return Skills.find();
    }
});
Template.addProject_skill.events({
    'submit form': function () {
        event.preventDefault();
        // get everything from the form the lazy way
        var pro = event.target.Project_S.value;
        var pSkill = event.target.projectSkills.value;
        // insert into Projects collection
        Project_Skills.insert({
            project_id: pro
            , skill_id: pSkill
        , });
    }
});
Template.project_skills.helpers({
    // get all projects from the Projects collection
    projects_skills: function () {
        return Projects.find();
    }, // this gets called from an each loop, so this refers to a single project, and grabs the _id in contributor
    // to join it with the Users collection
    project_s: function () {
        return Projects.findOne(this.project_id);
    }
})