const mongoose = require('mongoose');
const Admin = require('./Admin');
const Destination = require('./Destination');
const City = require('./City');
const Style = require('./Style');
const Tour = require('./Tour');
const Blog = require('./Blog');

// mongoose.set('debug',true);

const admin = new Admin({
  username: 'admin',
  password: 'admin',
});

const city = new City({
  linkName: 'neelam-valley',
  imageName: 'neelam-valley.jpg',
  imageCaption: 'Scenic view of Neelam Valley.',
  heading: 'Neelam Valley',
  caption: 'Caption for the city Neelam Valley goes here.',
});

const dest = new Destination({
  linkName: 'kashmir',
  imageName: 'kashmir.jpg',
  imageCaption: 'Scenic view of kashmir.',
  heading: 'Kashmir',
  caption: 'Caption for the destination Kashmir goes here',
  cities: [city._id],
});

const style = new Style({
  linkName: 'corporate',
  imageName: 'corporate.jpg',
  imageCaption: 'Picture of a man in black suit',
  heading: 'Corporate',
  caption: 'Caption for the trip style Corporate goes here',
  destinations: [],
  tours: [],
});

const tour = new Tour({
  linkName: '1',
  imageName: 'swat.jpg',
  imageCaption: 'Beautiful scenic picture of Swat',
  heading: 'Luxury Tour to Swat',
  caption: 'Caption for the tour goes here',
  priceMin: 2500,
  priceMax: 5000,
  durationMin: 3,
  durationMax: 7,
});

const blog = new Blog({
  author: 'Mohsin Ul Islam',
  title: 'Blog about tourism',
  content: 'Content of the blog goes here',
  imageName: 'naran.jpg',
  imageCaption: 'Beautiful scenic picture of Naran',
  readTime: 3,
});

// save the data
admin.save();
dest.save();
city.save();
style.save();
tour.save();
blog.save();
