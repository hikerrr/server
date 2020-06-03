const getters = {
  destinations: (state) => state.destinations,
  destById: (state) => (id) => {
    return state.destinations.find((dest) => dest._id === id);
  },
};

export default getters;
