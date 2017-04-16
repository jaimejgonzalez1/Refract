import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './project_view.html';

Template.project_view.helpers({
    'open_project': function() {
        console.log(Projects.findOne(Session.get('open_project')));
        return Projects.findOne(Session.get('open_project'));
    },
    'skills': function() {
        console.log(this.skills);
        console.log(Skills.findOne({}));
        console.log(Skills.findOne({'id': {'$in': this.skills}}));
        return Skills.find({'id': {'$in': this.skills}});
    }
});
