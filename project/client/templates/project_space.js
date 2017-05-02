import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './project_space.html';

Template.project_space.helpers({
    template_loaded() {
        return Session.get('template_loaded');
    },
    search_type() {
        return Session.get('search_type');
    },
});

Template.list_projects.helpers({
  list_projects() {
      var search_type = Session.get('search_type');
      console.log(search_type);
      console.log(Projects.findOne({}));
      if (search_type==''||search_type==undefined) {
          return Projects.find({});
      }
      if (search_type=='launched') {
          return Projects.find({status: 'launched'});
      }
      if (search_type=='created') {
          return Projects.find({owner_id: Meteor.userId()});
      }
      if (search_type=='applied') {
          // return projects from ids stored in applied array
          return Projects.find({_id: {$in: Meteor.user().profile.applied}});
      }
      if (search_type=='saved') {
          // return projects from ids stored in saved array
          return Projects.find({_id: {$in: Meteor.user().profile.saved}});
      }
  },
  header() {
          var search_type = Session.get('search_type');
          console.log(search_type);
          console.log(Projects.findOne({}));
          if (search_type==''||search_type==undefined) {
              return 'BROWSE PROJECTS';
          }
          if (search_type=='created') {
              return 'MY PROJECTS';
          }
          if (search_type=='applied') {
              // return projects from ids stored in applied array
              return 'APPLIED PROJECTS';
          }
          if (search_type=='saved') {
              // return projects from ids stored in saved array
              return 'SAVED PROJECTS';
          }
          if (search_type=='launched') {
              return 'EXPLORE';
          }
      },
    isProjectOwner() {
        return (Meteor.userId() == this.owner_id);
    },
    ownerName() {
        Meteor.subscribe('Meteorusers', [this.owner_id]);
        var profile = Meteor.users.findOne(this.owner_id).profile;
        return `${profile.firstname} ${profile.lastname}`;
    },
    isSaved() {
        return _.contains(Meteor.user().profile.saved, this._id);
    },
    // proj_skills() {
    //     console.log(this.skills);
    //     // console.log(Skills.findOne({_id: {$in: this.skills}}));
    //     // console.log(Skills.findOne());
    //     // console.log(Skills.findOne(this._id));
    //     console.log(this.skills);
    //     return Skills.find({_id: {$in: this.skills}});
    // },
    // has_skill() {
    //     console.log(this);
    //     console.log(Meteor.user().profile.skills_arr);
    //     console.log(this._id);
    //     return _.contains(Meteor.user().profile.skills_arr, this._id);
    // },
    skills_has() {
        var skills = this.skills;
        return Skills.find({_id: {$in:_.filter(skills, function(item){return _.contains(Meteor.user().profile.skills_arr, item)})}});
    },
    skills_no_has() {
        var skills = this.skills;
        return Skills.find({_id: {$in:_.filter(skills, function(item){return !(_.contains(Meteor.user().profile.skills_arr, item))})}});
    },
});

Template.project_full.helpers({
    'open_project': function() {
        console.log(Projects.findOne(Session.get('open_project')));
        return Projects.findOne(Session.get('open_project'));
    },
    isProjectOwner() {
        console.log(this.owner_id);
        return (Meteor.userId() == this.owner_id);
    },
});

Template.list_projects.events({
    "click [data-action='link']": function (evt) {
    // set current project
    // load template
    // console.log(this._id);
    // console.log(evt.currentTarget);
    Session.set('open_project', this._id);
    Session.set('template_loaded', evt.currentTarget.dataset.template);
},
'click .material-icons.bookmark'(evt, wut) {
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
