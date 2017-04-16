import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './logout.html';

Template.body.events({
    'submit .logout'(evt) {
        evt.preventDefault();
        //add callback later
        console.log(evt);
        Meteor.logout();
    }
});
