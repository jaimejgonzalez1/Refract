// from https://atmospherejs.com/reywood/publish-composite
Meteor.publishComposite('projects', function(_userId) {
    return {
    find: function () {
        return Projects.find({owner_id: _userId});
    }
    , children: [
        {
            // passes in each individual project from the Projects collection
            find: function (project) {
                // cross reference each project on the Users collection where _id in Users is equal to project.contributor
                return Users.find(
                    profile: {
                    applied_projects: project._id
                });
            }
        }
    , ]
}
});

Meteor.publishComposite('projects_students', function(_userId) {
    return {
    find: function () {
        return Projects.find();
    }
    , children: [
        {
            // passes in each individual project from the Projects collection
            find: function (project) {
                // cross reference each project on the Users collection where _id in Users is equal to project.contributor
                return Users.find({
                    // _id: project.contributor
                });
            }
        }
    , ]
}
});
// Meteor.publishComposite('user_Skills', {
//     // get the Projects collection - contains 'contributor' field which holds a user id from the Users collection
//     find: function () {
//         return User_Skills.find();
//     }
//     , children: [
//         {
//             // passes in each individual project from the Projects collection
//             find: function (User_Skills) {
//                 // cross reference each project on the Users collection where _id in Users is equal to project.contributor
//                 return Users.find({
//                     _id: user_skills.contributor
//                 });
//             }
//         }
//     , ]
// });
// Meteor.publishComposite('project_users', {
//     // get the Projects collection - contains 'contributor' field which holds a user id from the Users collection
//     find: function () {
//         return Project_Users.find();
//     }
//     , children: [
//         {
//             // passes in each individual project from the Projects collection
//             find: function (Project_Users) {
//                 // cross reference each project on the Users collection where _id in Users is equal to project.contributor
//                 return Users.find({
//                     _id: project_users.contributor
//                 });
//             }
//         }
//     , ]
// });
// Meteor.publishComposite('project_users', {
//     // get the Projects collection - contains 'contributor' field which holds a user id from the Users collection
//     find: function () {
//         return Project_Users.find();
//     }
//     , children: [
//         {
//             // passes in each individual project from the Projects collection
//             find: function (Project_Users) {
//                 // cross reference each project on the Users collection where _id in Users is equal to project.contributor
//                 return Users.find({
//                     _id: Users.contributor
//                 });
//             }
//         }
//     , ]
// });
// Meteor.publishComposite('project_skills', {
//     // get the Projects collection - contains 'contributor' field which holds a user id from the Users collection
//     find: function () {
//         return Projects.find();
//     }
//     , children: [
//         {
//             // passes in each individual project from the Projects collection
//             find: function (Projects) {
//                 // cross reference each project on the Users collection where _id in Users is equal to project.contributor
//                 return Users.find({
//                     _id: project_skills.contributor
//                 });
//             }
//         }
//     , ]
// });
// Meteor.publishComposite('skills', {
//     // get the Skills collection - contains 'contributor' field which holds a user id from the Users collection
//     find: function () {
//         return Skills.find();
//     }
// });