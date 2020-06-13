const getters = {
  styles: (state) => state.styles,
  styleById: (state) => (id) => {
    return state.styles.find((style) => style._id === id);
  },
};

export default getters;
