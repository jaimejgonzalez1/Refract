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
      if (search_type=='created') {
          return Projects.find({owner_id: Meteor.userId()});
      }
      if (search_type=='applied') {
          // return projects from ids stored in applied array
          return Projects.find({},{});
      }
      if (search_type=='saved') {
          // return projects from ids stored in saved array
          return Projects.find({},{});
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
      },
    isProjectOwner() {
        return (Meteor.userId() == this.owner_id);
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
    console.log(this._id);
    console.log(evt.currentTarget);
    Session.set('open_project', this._id);
    Session.set('template_loaded', evt.currentTarget.dataset.template);
    }
});