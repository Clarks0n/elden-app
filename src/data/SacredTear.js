let arr = [
    'Third Church of Marika, Limgrave',
    'Callu Baptismal Church, Limgrave',
    'Church of Pilgrimage, Limgrave',
    'Fourth Church of Marika, Limgrave',
    'Church of Irith, Liurnia of Lakes',
    'Bellum Church, Liurnia of Lakes',
    'Church of Inhibition, Liurnia of Lakes',
    'Second Church of Marika, Altus Plateau',
    'Stormcaller Church, Altus Plateau',
    'Church of the Plague, Caelid',
    'Church of Repose, Mountaintops of Giant',
    'First Church of Marika, Mountintops of Giant' 
];

export let data = arr.map((item, i) => (
    {id: i, name: item, done: false}
));



// // module.js
// var name = "foobar";
// // export it
// exports.name = name;

// //main.js
// // get a reference to your required module
// var myModule = require('./module');

// // name is a member of myModule due to the export above
// var name = myModule.name;
