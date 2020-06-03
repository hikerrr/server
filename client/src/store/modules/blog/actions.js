import axios from 'axios';

const actions = {
  getBlogs(context) {
    axios.get('/api/blogs').then((response) => {
      context.commit('UPDATE_BLOGS', response.data.data);
    });
  },
};

export default actions;
