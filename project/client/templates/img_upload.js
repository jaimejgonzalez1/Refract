// import { Meteor } from 'meteor/meteor';
// import { Template } from 'meteor/templating';
// import { Session } from 'meteor/session';
// // import { FilesCollection } from 'meteor/ostrio:files';
//
// import './img_upload.html';
//
// Meteor.subscribe('files.images.all');
//
// this.Images = new FilesCollection({collectionName: 'Images'});
//
// Template.img_upload.onCreated(function () {
//   this.currentUpload = new ReactiveVar(false);
// });
//
// Template.img_upload.helpers({
//     profile_pic: function () {
//       return;
//   },
//   currentUpload: function () {
//     return Template.instance().currentUpload.get();
//   }
// });
//
// Template.img_upload.events({
//   'change #fileInput': function (e, template) {
//     if (e.currentTarget.files && e.currentTarget.files[0]) {
//       // We upload only one file, in case
//       // multiple files were selected
//       var upload = Images.insert({
//         file: e.currentTarget.files[0],
//         streams: 'dynamic',
//         chunkSize: 'dynamic'
//       }, false);
//
//       upload.on('start', function () {
//         template.currentUpload.set(this);
//       });
//
//       upload.on('end', function (error, fileObj) {
//         if (error) {
//           alert('Error during upload: ' + error);
//         } else {
//           alert('File "' + fileObj.name + '" successfully uploaded');
//         }
//         template.currentUpload.set(false);
//       });
//       upload.start();
//     }
//   }
// });
//
// Template.file.helpers({
//   imageFiles: function () {
//       console.log(Images.findOne());
//     return Images.find();
//   },
// });
import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './img_upload.html';

Meteor.subscribe('files.images.all');
Images = new Meteor.Files({
  collectionName: 'Images'
});

Template.uploadedFiles.helpers({
  uploadedFiles: function () {
    return Images.find();
},
    checker: function() {
    console.log(this);
},
    imageFile: function () {
   return Images.findOne({_id:Meteor.user().profile.pic_id});
 },
 hasImage: function () {
return !(Meteor.user().profile.pic_id == "" || Meteor.user().profile.pic_id == undefined);
},

});

Template.uploadForm.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm.helpers({
  currentUpload: function () {
    return Template.instance().currentUpload.get();
  }
});

Template.uploadForm.events({
  'change #fileInput': function (e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // there was multiple files selected
      var file = e.currentTarget.files[0];
      if (file) {
        var uploadInstance = Images.insert({
          file: file,
          streams: 'dynamic',
          chunkSize: 'dynamic'
        }, false);
        uploadInstance.on('start', function() {
          template.currentUpload.set(this);
        });
        uploadInstance.on('end', function(error, fileObj) {
          if (error) {
            alert('Error during upload: ' + error.reason);
          } else {
            // alert('File "' + fileObj.name + '" successfully uploaded');
            // console.log(fileObj._id);
            console.log(Images.remove({_id:Meteor.user().profile.pic_id}));
            // console.log(Images.findOne({_id:Meteor.user().profile.pic_id}).remove({}));
            Meteor.users.update({_id: Meteor.userId()}, {$set:{"profile.pic_id":fileObj._id}});
          }
          template.currentUpload.set(false);
        });
        uploadInstance.start();
      }
    }
  }
});
