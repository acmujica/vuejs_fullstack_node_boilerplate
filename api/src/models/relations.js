'use strict';
import _ from 'lodash';

const DB = require('./database').DB;
const ExampleModel = require('./example');
const OtherModel = require('./other');

ExampleModel.hasMany(OtherModel);
OtherModel.belongsTo(ExampleModel)

// Some Mock Data for loading into DB.
// 
// var testing = {
//         "users": [
//                 {
//                 first: "bob1",
//                 last: "last1",
//                 email: "email1@email.com"
//                 },
//                 {
//                 first: "bob2",
//                 last: "last2",
//                 email: "email2@email.com"
//                 },
//                 {
//                 first: "bob3",
//                 last: "last3",
//                 email: "email3@email.com"
//                 },
//         ],
//         "projects": [
//                 {
//                         name: "pj1",
//                         description: "mydes1",
//                 },
//                 {
//                         name: "pj2",
//                         description: "mydes2",
//                 },
//         ],
//         "codes": [
//                 {
//                         parentCat: "one",
//                         childCat: "one",
//                         description: "oneone"
//                 },
//                 {
//                         parentCat: "one",
//                         childCat: "two",
//                         description: "onetwo"
//                 },
//                 {
//                         parentCat: "one",
//                         childCat: "three",
//                         description: "onethree"
//                 },
//                 {
//                         parentCat: "two",
//                         childCat: "four",
//                         description: "twofour"
//                 },
//                 {
//                         parentCat: "two",
//                         childCat: "one",
//                         description: "twoone"
//                 },
//         ]
// }

// Sync DB model and load in mock data.
// 
// DB.sync().then(() => {
//         _.each(testing.users, (u) => { // u for user
//             return UsersModel.create({
//                 first: u.first,
//                 last: u.last,
//                 email: u.email,
//             });
//         });
//         _.each(testing.projects, (p) => { // u for user
//             return ProjectsModel.create({
//                 name: p.name,
//                 description: p.description,
//             });
//         });
//         _.each(testing.codes, (c) => { // u for user
//             return CodesModel.create({
//                 parentCat: c.parentCat,
//                 childCat: c.childCat,
//                 description: c.description
//             });
//         });
//         return
//         }
//     );

DB.sync();

const Example = DB.models.example;
const Other = DB.models.other;

export {
        DB,
        Example,
        Other,
};

