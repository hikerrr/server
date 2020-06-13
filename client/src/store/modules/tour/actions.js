import axios from 'axios';

const actions = {
  getTours(context) {
    axios
      .get('/api/tours')
      .then((response) => {
        if (response.status === 200)
          context.commit('UPDATE_TOURS', response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateTour(context, tour) {
    return new Promise((resolve, reject) => {
      axios
        .patch(`/api/tours/${tour.linkName}`, tour)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_TOURS', response.data);
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
  addTour(context, tour) {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/tours', tour)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_TOURS', response.data);
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
  deleteTour(context, id) {
    return new Promise((resolve, reject) => {
      axios
        .delete('/api/tours/' + id)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_TOURS', response.data);
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
