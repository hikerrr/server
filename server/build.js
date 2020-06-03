// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import pug from 'pug';
import fs from 'fs';
import path from 'path';
import Destination from './models/Destination';
import Style from './models/Style';
import Tour from './models/Tour';
import Blog from './models/Blog';
import City from './models/City';

const updateDests = async (destName) => {
  // create files at dest path
  const destPath = path.join(__dirname, '../public', 'destinations', destName);

  const destinations = await Destination.find({});
  const destination = await Destination.find({linkName: destName}).populate({
    path: 'cities',
    model: 'City',
  });

  if (!destination) {
    fs.rmdir(destPath, (err) => {
      if (err) throw err;
      console.log(`Directory ${destName} removed.`);
    });
  }

  fs.mkdir(destPath, (err) => {
    if (err.code != 'EEXIST') throw err;
    fs.open(path.join(destPath, 'index.html'), 'w', async (err, file) => {
      const data = {
        destinations,
        destination,
      };

      const destFunction = pug.compileFile(
        path.join(__dirname, '../views', 'destinations.pug')
      );

      fs.write(file, destFunction({data}), (err) => {
        if (err) throw err;
        console.log(`${dest.linkName}.html build done!`);
        fs.close(file, (err) => {
          if (err) throw err;
        });
      });
    });
  });
};

const updateCities = async () => {
  // create files at dest path
  const tourPath = path.join(__dirname, '../public', 'tours');

  const cities = await City.find({});

  cities.forEach((tour) => {
    fs.mkdir(path.join(tourPath, tour.linkName), (err) => {
      if (err.code != 'EEXIST') throw err;
      fs.open(
        path.join(tourPath, tour.linkName, 'index.html'),
        'w',
        async (err, file) => {
          const city = await City.findOne({linkName: tour.linkName}).populate({
            path: 'tours',
            model: 'Tour',
          });

          const data = {
            city,
          };

          const tourFunction = pug.compileFile(
            path.join(__dirname, '../views', 'tours.pug')
          );

          fs.write(file, tourFunction({data}), (err) => {
            if (err) throw err;
            console.log(`${tour.linkName}.html build done!`);
            fs.close(file, (err) => {
              if (err) throw err;
            });
          });
        }
      );
    });
  });
};

const updateStyles = async () => {
  // create files at trip styles
  const stylePath = path.join(__dirname, '../public', 'styles');

  const tripStyles = await Style.find({});

  tripStyles.forEach((style) => {
    fs.mkdir(path.join(stylePath, style.linkName), (err) => {
      if (err.code != 'EEXIST') throw err;
      fs.open(
        path.join(stylePath, style.linkName, 'index.html'),
        'w',
        async (err, file) => {
          const tripStyle = await Style.findOne({linkName: style.linkName})
            .populate({path: 'cities', model: 'City'})
            .populate({path: 'tours', model: 'Tour'});

          const data = {
            tripStyle,
          };

          const styleFunction = pug.compileFile(
            path.join(__dirname, '../views', 'styles.pug')
          );

          fs.write(file, styleFunction({data}), (err) => {
            if (err) throw err;
            console.log(`${style.linkName}.html build done!`);
            fs.close(file, (err) => {
              if (err) throw err;
            });
          });
        }
      );
    });
  });
};

const updateBlogs = async () => {};

const updateTours = async () => {
  // create files at dest path
  const tripPath = path.join(__dirname, '../public', 'trips');

  const tours = await Tour.find({});

  tours.forEach((tour) => {
    fs.mkdir(path.join(tripPath, tour.linkName), (err) => {
      if (err.code != 'EEXIST') throw err;
      fs.open(
        path.join(tripPath, tour.linkName, 'index.html'),
        'w',
        async (err, file) => {
          const trip = await Tour.findOne({linkName: tour.linkName});

          const data = {
            trip,
          };

          const tourFunction = pug.compileFile(
            path.join(__dirname, '../views', 'trips.pug')
          );

          fs.write(file, tourFunction({data}), (err) => {
            if (err) throw err;
            console.log(`${tour.linkName}.html build done!`);
            fs.close(file, (err) => {
              if (err) throw err;
            });
          });
        }
      );
    });
  });
};

const updateIndex = async () => {
  try {
    const destinations = await Destination.find({});
    const tripStyles = await Style.find({});
    const tours = await Tour.find({});
    const blogs = await Blog.find({});
    const cities = await City.find({});

    const data = {
      destinations,
      tripStyles,
      upComingTours: tours,
      blogs,
    };

    const index = pug.compileFile(
      path.join(__dirname, '../views', 'index.pug')
    );

    // build index.html
    fs.writeFile(
      path.join(__dirname, '../public', 'index.html'),
      index({data}),
      (err) => {
        if (err) throw err;
        console.log('index.html build done!');
      }
    );
  } catch (Error) {
    console.log(`An Error Occured: ${Error}`);
  }
};

export default {
  updateIndex,
  updateBlogs,
  updateDests,
  updateTours,
  updateCities,
  updateStyles,
};
