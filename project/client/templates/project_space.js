import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './project_space.html';

Template.project_space.helpers({
    search_type() {
        return Session.get('search_type');
    },
    isProjectOwner() {
        return (Meteor.userId() == this.owner_id);
    },
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
});
