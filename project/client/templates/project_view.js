import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './project_view.html';

Template.project_view.helpers({
    'open_project': function() {
        Projects.findOne(Session.get('open_project'));
        return Projects.findOne(Session.get('open_project'));
    },
    'skills': function() {
        return Skills.find({'id': {'$in': this.skills}});
    },
    'saved': function() {
        return _.contains(Meteor.user().profile.saved, this._id);
    },
    'applied': function() {
        return _.contains(Meteor.user().profile.applied, this._id);
    },
    'owner': function() {
        Meteor.subscribe('Meteorusers', [this.owner_id]);
        // console.log(this.owner_id);
        // console.log(Meteor.users.findOne(this.owner_id));
        return Meteor.users.findOne(this.owner_id);
    },
    'date': function(thing) {
        console.log(thing);
        var addZero = function(y) {
            var x = y.toString();
            console.log(((x.length < 2) ? '0'+x : x));
            return ((x.length < 2) ? `0${x}` : x);
        }
        console.log(`${thing.getFullYear()}-${addZero(thing.getMonth()+1)}-${addZero(thing.getDate())}`);
        // return `${thing.getFullYear()}-${addZero(thing.getMonth()+1)}-${addZero(thing.getDate())}`;
        return thing.toDateString();
    },
    'skills': function() {
        console.log(this);
        return Skills.find({_id:{$in:this.skills}});
    }
});

Template.project_view.events({
    "click [data-action='link']": function (evt) {
        // set current project
        // load template
        // console.log(this._id);
        // console.log(evt.currentTarget);
        // console.log(evt.currentTarget.dataset.template);
        Session.set('selected_user', evt.currentTarget.dataset.profile);
        Session.set('last_template', Session.get('template_loaded'));
        Session.set('template_loaded', evt.currentTarget.dataset.template);
    },
    'submit #save_project'(evt, wut) {
        evt.preventDefault();
        console.log(this._id);
        if (!(_.has(Meteor.user().profile, 'saved'))) {
            Meteor.users.update({_id: Meteor.userId()}, {$set:{"profile.saved":[]}})
        }
        if (!(_.contains(Meteor.user().profile.saved, this._id))) {
            console.log(Meteor.users.update({_id: Meteor.userId()}, {$push:{"profile.saved":this._id}}));
            console.log('push');
        } else {
            console.log(Meteor.users.update({_id: Meteor.userId()}, {$pull:{"profile.saved":this._id}}));
            console.log('pull');
        }
    },
    'submit #apply_project'(evt, wut) {
        evt.preventDefault();
        console.log('applied');
        console.log(Applicants.insert({applicant:Meteor.user()._id,
            owner:this.owner_id,
            project:this._id}));
        },
        'click .material-icons.projectbookmark'(evt, wut) {
            evt.preventDefault();
            if (!(_.has(Meteor.user().profile, 'saved'))) {
                Meteor.users.update({_id: Meteor.userId()}, {$set:{"profile.saved":[]}})
            }
            if (!(_.contains(Meteor.user().profile.saved, this._id))) {
                console.log(Meteor.users.update({_id: Meteor.userId()}, {$push:{"profile.saved":this._id}}));
                console.log('push');
            } else {
                console.log(Meteor.users.update({_id: Meteor.userId()}, {$pull:{"profile.saved":this._id}}));
                console.log('pull');
            }
        }
    });
