import axios from 'axios';

const actions = {
  getBlogs(context) {
    axios
      .get('/api/blogs')
      .then((response) => {
        if (response.status === 200)
          context.commit('UPDATE_BLOGS', response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateBlog(context, blog) {
    return new Promise((resolve, reject) => {
      axios
        .patch(`/api/blogs/${blog.linkName}`, blog)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_BLOGS', response.data);
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
  addBlog(context, blog) {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/blogs', blog)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_BLOGS', response.data);
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
  deleteBlog(context, id) {
    return new Promise((resolve, reject) => {
      axios
        .delete('/api/blogs/' + id)
        .then((response) => {
          if (response.status === 200) {
            context.commit('UPDATE_BLOGS', response.data);
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
