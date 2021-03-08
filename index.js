const circle = require('@turf/circle');
const fs = require('fs-extra');

let json = {
  type: 'FeatureCollection',
  features: []
};

const points = fs.readJsonSync('./data.json');

console.log('total points loaded: ', points.length);

let circles = [];

points.forEach((point) => {
  circles.push(circle.default(point.center, point.options.properties.Area, point.options));
});

console.log('total circles created', circles.length);

json.features = circles;

fs.writeFile('./features.json', JSON.stringify(json));

console.log('Generated features.json file successfully');
