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
        const dateOptions = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        res.data.forEach((b) => {
          let date = new Date(b.updatedAt);
          b.modified = date.toLocaleDateString("en-US", dateOptions);
        });
        commit("setAllBugs", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
