export default {
  namespaced: true,
  state: () => ({
    hotels: false,
    loading: false,
  }),
  mutations: {
    setHotels(state, hotels) {
      state.hotels = hotels;
    },
    setRemoveHotel(state, hotel) {
      state.hotels = state.hotels.filter((h) => h.id !== hotel.id);
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  getters: {
    getLoading(state) {
      return state.loading;
    },
    getHotels(state) {
      return state.hotels;
    },
  },
  actions: {
    dispatchHotels({ commit, getters }, { hotels }) {
      if (getters.loading) {
        return;
      }
      commit("setLoading", true);
      commit("setHotels", hotels);
      commit("setLoading", false);
    },
    dispatchRemoveHotel({ commit, getters }, { hotel }) {
      if (getters.loading) {
        return;
      }
      commit("setLoading", true);
      commit("setRemoveHotel", hotel);
      commit("setLoading", false);
    },
  },
};
