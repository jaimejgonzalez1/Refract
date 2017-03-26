import {
    Template
}
from 'meteor/templating';
import './skill.html';
Template.addProject_skill.helpers({
    // get all the Users collection
});
Template.add_skills.events({
    'submit form': function () {
        event.preventDefault();
        // get everything from the form the lazy way
        var skill = event.target.skill_name.value;
        var parent = event.target.parent_id.value;
        // insert into Projects collection
        Skills.insert({
            parent_id: parent
            , skill_name: skill
        , });
    }
});
Template.adding_skills.helpers({
    // get all projects from the Projects collection
    adding: function () {
        return Skills.find();
    }
, })