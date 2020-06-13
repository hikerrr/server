const getters = {
  substyles: (state) => state.substyles,
  substyleById: (state) => (id) => {
    return state.substyles.find((substyle) => substyle._id === id);
  },
};

export default getters;
