// import { Mongo } from 'meteor/mongo';
// import { FilesCollection } from 'meteor/ostrio:files';
//
// Meteor.subscribe('files.images.all');
//
// // var Images = new FilesCollection({
// //   collectionName: 'Images',
// //   storagePath: "assets/data/images",
// //   allowClientCode: false, // Disallow remove files from Client
// //   onBeforeUpload: function (file) {
// //     // Allow upload files under 10MB, and only in png/jpg/jpeg formats
// //     if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
// //       return true;
// //     } else {
// //       return 'Please upload image, with size equal or less than 10MB';
// //     }
// //   }
// // });
//
// if (Meteor.isClient) {
//   Meteor.subscribe('files.images.all');
// }
//
// if (Meteor.isServer) {
//   Meteor.publish('files.images.all', function () {
//     return Images.find().cursor;
//   });
// }
