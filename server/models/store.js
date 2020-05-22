const {cities} = require('./cities');
const {destinations} = require('./destinations');
const {tripStyles} = require('./tripStyles');
const {tours} = require('./tours');

const store = {
  destinations: destinations,
  cities: cities,
  tripStyles:tripStyles,
  tours: tours
}

module.exports = {store};
