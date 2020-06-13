import axios from 'axios';

const actions = {
  getCareers(context) {
    axios
      .get('/api/careers')
      .then((response) => {
        if (response.status === 200)
          context.commit('UPDATE_CAREERS', response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateCareer(context, career) {
    return new Promise((resolve, reject) => {
      axios
        .patch(`/api/careers/${career.linkName}`, career)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_CAREERS', response.data);
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
  addCareer(context, career) {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/careers', career)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_CAREERS', response.data);
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
  deleteCareer(context, id) {
    return new Promise((resolve, reject) => {
      axios
        .delete('/api/careers/' + id)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_CAREERS', response.data);
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
