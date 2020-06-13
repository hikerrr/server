import axios from 'axios';

const actions = {
  getSubstyles(context) {
    axios
      .get('/api/substyles')
      .then((response) => {
        if (response.status === 200)
          context.commit('UPDATE_SUBSTYLES', response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateSubstyle(context, substyle) {
    return new Promise((resolve, reject) => {
      axios
        .patch(`/api/substyles/${substyle.linkName}`, substyle)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_SUBSTYLES', response.data);
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
  addSubstyle(context, substyle) {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/substyles', substyle)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_SUBSTYLES', response.data);
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
  deleteSubstyle(context, id) {
    return new Promise((resolve, reject) => {
      axios
        .delete('/api/substyles/' + id)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_SUBSTYLES', response.data);
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
