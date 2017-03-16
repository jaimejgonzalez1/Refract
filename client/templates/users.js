import {
    Template
}
from 'meteor/templating';
import './users.html';
Template.addUser.events({
    'submit form': function () {
        event.preventDefault();
        var userName = event.target.uname.value;
        var userEmail = event.target.uemail.value;
        var userRole = event.target.role.value;
        var userOccupation = event.target.uoccupate.value;
        Users.insert({
            username: userName
            , email: userEmail
            , occupation: userOccupation
            , userrole: userRole
        , });
    }
});
Template.users.helpers({
    'user': function () {
        return Users.find();
    }
, });