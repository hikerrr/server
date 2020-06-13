const getters = {
  careers: (state) => state.careers,
  careerById: (state) => (id) => {
    return state.careers.find((career) => career._id === id);
  },
};

export default getters;
