import axios from 'axios';

const actions = {
  getDestinations(context) {
    axios
      .get('/api/destinations')
      .then((response) => {
        if (response.status === 200)
          context.commit('UPDATE_DESTINATIONS', response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateDestination(context, destination) {
    return new Promise((resolve, reject) => {
      axios
        .patch(`/api/destinations/${destination.linkName}`, destination)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_DESTINATIONS', response.data);
            resolve(true);
          } else {
            reject(response.statusText);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  addDestination(context, destination) {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/destinations', destination)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_DESTINATIONS', response.data);
            resolve(true);
          } else {
            reject(response.statusText);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  deleteDestination(context, id) {
    return new Promise((resolve, reject) => {
      axios
        .delete('/api/destinations/' + id)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_DESTINATIONS', response.data);
            resolve(true);
          } else {
            reject(response.statusText);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default actions;
