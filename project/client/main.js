import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { check } from 'meteor/check';
import { Session } from 'meteor/session';
import { FilesCollection } from 'meteor/ostrio:files';


import '../imports/acct-config.js';

import './templates/body.js';

Meteor.methods({
    'projects.insert'(form) {
        // check(form.expDate, Date);

        if (! Meteor.userId()) {
            throw new Meteor.Error('not logged in');
        }

        Projects.insert({
            project_name: form.projectName.value,
            project_desc: form.projectDesc.value,
            date_added: new Date(),
            date_expiry: new Date(form.expDate.value),
            owner_id: Meteor.userId(),
        });

    },
});

var Images = new FilesCollection({
  collectionName: 'Images',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload: function (file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
  }
});

if (Meteor.isClient) {
  Meteor.subscribe('files.images.all');
}

if (Meteor.isServer) {
  Meteor.publish('files.images.all', function () {
    return Images.find().cursor;
  });
}
// import './main.html';

// create the collections on the client
// Users = new Mongo.Collection('users');
// Roles = new Mongo.Collection('roles');
// Projects = new Mongo.Collection('projects');
// User_Skills = new Mongo.Collection('user_skills');
// Skills = new Mongo.Collection('skills');
// Project_Users = new Mongo.Collection('project_users');
// Project_Skills = new Mongo.Collection('project_skills');
// set up the projectUsers subscription (in server > publications > users.js)
// Meteor.subscribe('projectUsers');
// Meteor.subscribe('user_Skills');
// Meteor.subscribe('project_users');
// Meteor.subscribe('project_skills');
// Meteor.subscribe('skills');
// Meteor.subscribe('users');
// Meteor.subscribe('projects');
