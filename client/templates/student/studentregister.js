import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
// import '../../skillsCollection.js';
import './studentregister.html';

var skillsCollection = loadSkills();

Skills = new Mongo.Collection(null);

skillsCollection.forEach(function(skill) {Skills.insert(skill)});

// var tom = Persons.findOne({ name: 'Tom' });

Template.student_register.helpers({
    'parent_skills': function() {
        // console.log(Projects.find().count());
        return Skills.find({parent_id: undefined});
    },
    'child_skills': function() {
        // console.log(Projects.find().count());
        console.log(this);
        // console.log(skill);
        // console.log(child);
        return Skills.find({parent_id: this.id});
    },
});

Template.student_register.events({
    'submit .applyProjectSubmit'(event, wut) {
        event.preventDefault();
        console.log(event.target.project.value);
            console.log(Projects.update({_id: event.target.project.value}, {
                $push: { "applied": Meteor.userId() }
            }));
    }
});


function loadSkills() {
    return [
        {
            id: "1",
            skill_name: "Business",
            parent_id: undefined
        },
        {
            id: "2",
            skill_name: "Business Plans",
            parent_id: "1"
        },
        {
            id: "3",
            skill_name: "Market Research",
            parent_id: "1"
        },
        {
            id: "4",
            skill_name: "Presentations",
            parent_id: "1"
        },
        {
            id: "5",
            skill_name: "Advertising and Marketing",
            parent_id: undefined
        },
        {
            id: "6",
            skill_name: "Advertising Art",
            parent_id: "5"
        },
        {
            id: "7",
            skill_name: "Content Marketing",
            parent_id: "5"
        },
        {
            id: "8",
            skill_name: "Email Marketing",
            parent_id: "5"
        },
        {
            id: "9",
            skill_name: "Local Listings",
            parent_id: "5"
        },
        {
            id: "10",
            skill_name: "Marketing Strategy",
            parent_id: "5"
        },
        {
            id: "11",
            skill_name: "Music Promotion",
            parent_id: "5"
        },
        {
            id: "12",
            skill_name: "Radio",
            parent_id: "5"
        },
        {
            id: "13",
            skill_name: "SEO & Web Analytics",
            parent_id: "5"
        },
        {
            id: "14",
            skill_name: "Social Media Marketing Strategy",
            parent_id: "5"
        },
        {
            id: "15",
            skill_name: "Web & Mobile Advertising",
            parent_id: "5"
        },
        {
            id: "16",
            skill_name: "Graphics & Design",
            parent_id: undefined
        },
        {
            id: "17",
            skill_name: "3D & 2D Modeling",
            parent_id: "16"
        },
        {
            id: "18",
            skill_name: "Branding Materials",
            parent_id: "16"
        },
        {
            id: "19",
            skill_name: "Graphic & Vector Editing",
            parent_id: "16"
        },
        {
            id: "20",
            skill_name: "Illustration",
            parent_id: "16"
        },
        {
            id: "21",
            skill_name: "Logo Design",
            parent_id: "16"
        },
        {
            id: "22",
            skill_name: "Presentation Design & Infographics",
            parent_id: "16"
        },
        {
            id: "23",
            skill_name: "Product & Packaging Design",
            parent_id: "16"
        },
        {
            id: "24",
            skill_name: "UX & UI Design",
            parent_id: "16"
        },
        {
            id: "25",
            skill_name: "Web & Mobile Design",
            parent_id: "16"
        },
        {
            id: "26",
            skill_name: "Performance",
            parent_id: undefined
        },
        {
            id: "27",
            skill_name: "Acting",
            parent_id: "26"
        },
        {
            id: "28",
            skill_name: "Dance",
            parent_id: "26"
        },
        {
            id: "29",
            skill_name: "Instrumental Performance",
            parent_id: "26"
        },
        {
            id: "30",
            skill_name: "Musical Theatre",
            parent_id: "26"
        },
        {
            id: "31",
            skill_name: "Comedy & Improv",
            parent_id: "26"
        },
        {
            id: "32",
            skill_name: "Video & Animation",
            parent_id: undefined
        },
        {
            id: "33",
            skill_name: "Character Modeling & Animating",
            parent_id: "32"
        },
        {
            id: "34",
            skill_name: "Editing & Post Production",
            parent_id: "32"
        },
        {
            id: "35",
            skill_name: "Promotional & Brand Videos",
            parent_id: "32"
        },
        {
            id: "36",
            skill_name: "Music & Audio",
            parent_id: undefined
        },
        {
            id: "37",
            skill_name: "Mixing & Mastering",
            parent_id: "36"
        },
        {
            id: "38",
            skill_name: "Producers & Composers",
            parent_id: "36"
        },
        {
            id: "39",
            skill_name: "Session Musicians & Singers",
            parent_id: "36"
        },
        {
            id: "40",
            skill_name: "Songwriters",
            parent_id: "36"
        },
        {
            id: "41",
            skill_name: "Sound Effects",
            parent_id: "36"
        },
        {
            id: "42",
            skill_name: "Voice Over",
            parent_id: "36"
        },
        {
            id: "43",
            skill_name: "Tech & Games",
            parent_id: undefined
        },
        {
            id: "44",
            skill_name: "Game design",
            parent_id: "43"
        },
        {
            id: "45",
            skill_name: "Game programming",
            parent_id: "43"
        },
        {
            id: "46",
            skill_name: "Game art",
            parent_id: "43"
        },
        {
            id: "47",
            skill_name: "Mobile development",
            parent_id: "43"
        },
        {
            id: "48",
            skill_name: "Website Builders & CMS",
            parent_id: "43"
        },
        {
            id: "49",
            skill_name: "Web Programming",
            parent_id: "43"
        },
        {
            id: "50",
            skill_name: "Fashion & Photography",
            parent_id: undefined
        },
        {
            id: "51",
            skill_name: "Commercial Photography",
            parent_id: "50"
        },
        {
            id: "52",
            skill_name: "Darkroom process",
            parent_id: "50"
        },
        {
            id: "53",
            skill_name: "Editorial Photography",
            parent_id: "50"
        },
        {
            id: "54",
            skill_name: "Fashion design",
            parent_id: "50"
        },
        {
            id: "55",
            skill_name: "Garment construction",
            parent_id: "50"
        },
        {
            id: "56",
            skill_name: "Image Manipulation",
            parent_id: "50"
        },
        {
            id: "57",
            skill_name: "Modeling",
            parent_id: "50"
        },
        {
            id: "58",
            skill_name: "Photojournalism",
            parent_id: "50"
        },
        {
            id: "59",
            skill_name: "Photoshoot setup",
            parent_id: "50"
        },
        {
            id: "60",
            skill_name: "Textile design",
            parent_id: "50"
        },
        {
            id: "61",
            skill_name: "Writing & Translation",
            parent_id: undefined
        },
        {
            id: "62",
            skill_name: "Business Copywriting",
            parent_id: "61"
        },
        {
            id: "63",
            skill_name: "Creative Writing",
            parent_id: "61"
        },
        {
            id: "64",
            skill_name: "Journalism & Blogging",
            parent_id: "61"
        },
        {
            id: "65",
            skill_name: "Press Releases",
            parent_id: "61"
        },
        {
            id: "66",
            skill_name: "Proofreading & Editing",
            parent_id: "61"
        },
        {
            id: "67",
            skill_name: "Research & Summaries",
            parent_id: "61"
        },
        {
            id: "68",
            skill_name: "Screenwriting",
            parent_id: "61"
        },
        {
            id: "69",
            skill_name: "Translation & Transcription",
            parent_id: "61"
        }
    ];
}
