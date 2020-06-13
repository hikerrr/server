import axios from 'axios';

const actions = {
  getStyles(context) {
    axios
      .get('/api/styles')
      .then((response) => {
        if (response.status === 200)
          context.commit('UPDATE_STYLES', response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateStyle(context, style) {
    return new Promise((resolve, reject) => {
      axios
        .patch(`/api/styles/${style.linkName}`, style)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_STYLES', response.data);
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
  addStyle(context, style) {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/styles', style)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_STYLES', response.data);
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
  deleteStyle(context, id) {
    return new Promise((resolve, reject) => {
      axios
        .delete('/api/styles/' + id)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_STYLES', response.data);
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
