import {
    Template
}
from 'meteor/templating';
import './user_skills.html';
Template.addSkills.helpers({
    // get all the Users collection
    'skills': function () {
        return Users.find();
    }
    , 'skillL': function () {
        return Skills.find();
    }
});
Template.addSkills.events({
    'submit form': function () {
        event.preventDefault();
        // get everything from the form the lazy way
        var sName = event.target.skillName.value;
        var sUser = event.target.user_Skills.value;
        var sref = event.target.user_SkillL.value;
        // insert into Projects collection
        User_Skills.insert({
            skill_id: sref
            , contributor: sUser
        , });
    }
});
Template.user_skills.helpers({
    // get all projects from the Projects collection
    skills: function () {
        return User_Skills.find();
    }, // this gets called from an each loop, so this refers to a single project, and grabs the _id in contributor
    // to join it with the Users collection
    user_skills: function () {
        return Users.findOne(this.contributor);
    }
})