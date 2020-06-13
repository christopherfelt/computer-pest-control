import { api } from "./AxiosService";

export const BugStore = {
  state: {
    bugs: [],
  },
  mutations: {
    setAllBugs(state, bugs) {
      state.bugs = bugs;
    },
  },
  actions: {
    async getAllBugs({ commit, dispatch }) {
      try {
        let res = await api.get("bugs");
        commit("setAllBugs", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
