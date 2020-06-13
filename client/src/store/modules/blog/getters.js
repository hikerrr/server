const getters = {
  blogs: (state) => state.blogs,
  blogById: (state) => (id) => {
    return state.blogs.find((blog) => blog._id === id);
  },
};

export default getters;
