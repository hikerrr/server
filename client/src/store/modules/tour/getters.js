const getters = {
  tours: (state) => state.tours,
  tourById: (state) => (id) => {
    return state.tours.find((tour) => tour._id === id);
  },
};

export default getters;
