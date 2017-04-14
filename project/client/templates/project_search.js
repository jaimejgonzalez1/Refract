import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './project_search.html';

Meteor.subscribe('projects', Meteor.userId());

Template.project_search.helpers({
    'projects': function() {
        console.log(Projects.find({}));
        return Projects.find({});
    },
});
