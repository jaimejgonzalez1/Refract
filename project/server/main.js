import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { FilesCollection } from 'meteor/ostrio:files';

import './publications/projectsPublish.js';

Projects = new Mongo.Collection('projects');
Applicants = new Mongo.Collection('applicants');

Meteor.startup(() => {
    // code to run on server at startup
});

// Images = new Meteor.Files({
//   collectionName: 'Images',
//   storagePath: "assets/data/images",
//   allowClientCode: false, // Disallow remove files from Client
//   onBeforeUpload: function (file) {
//     // Allow upload files under 10MB, and only in png/jpg/jpeg formats
//     if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
//       return true;
//     } else {
//       return 'Please upload image, with size equal or less than 10MB';
//     }
//   }
// });

// if (Meteor.isClient) {
//   Meteor.subscribe('files.images.all');
// }

// if (Meteor.isServer) {
//   Meteor.publish('files.images.all', function () {
//     return Images.find().cursor;
//   });
// }

this.Images = new Meteor.Files({
  debug: true,
  collectionName: 'Images',
  // allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload: function (file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 1024*1024*10 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
  }
});

if (Meteor.isServer) {
  Images.denyClient();
  Meteor.publish('files.images.all', function () {
    return Images.find().cursor;
  });

} else {

  Meteor.subscribe('files.images.all');
}
