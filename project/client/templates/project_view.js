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
        return Skills.find({'id': {'$in': this.skills}});
    },
    'owner': function() {
        Meteor.subscribe('Meteorusers', [this.owner_id]);
        console.log(this.owner_id);
        console.log(Meteor.users.findOne(this.owner_id));
        return Meteor.users.findOne(this.owner_id);
    }
});

Template.project_view.events({
    "click [data-action='link']": function (evt) {
    // set current project
    // load template
    console.log(this._id);
    console.log(evt.currentTarget);
    console.log(evt.currentTarget.dataset.template);
    Session.set('selected_user', evt.currentTarget.dataset.profile);
    Session.set('last_template', Session.get('template_loaded'));
    Session.set('template_loaded', evt.currentTarget.dataset.template);
    }
});
