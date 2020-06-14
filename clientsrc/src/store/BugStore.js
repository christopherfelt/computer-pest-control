import { api } from "./AxiosService";

export const BugStore = {
  state: {
    bugs: [],
    activeBug: {},
  },
  mutations: {
    setAllBugs(state, bugs) {
      state.bugs = bugs;
    },
    addNewBug(state, bug) {
      state.bugs.push(bug);
    },
    activeBug(state, bug) {
      state.activeBug = bug;
    },
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
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
    async getBugById({ commit, dispatch }, id) {
      try {
        let res = await api.get("bugs/" + id);
        const dateOptions = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        let modifiedDate = new Date(res.data.updatedAt);
        let creationDate = new Date(res.data.createdAt);
        res.data.modified = modifiedDate.toLocaleDateString(
          "en-US",
          dateOptions
        );
        res.data.creation = creationDate.toLocaleDateString(
          "en-US",
          dateOptions
        );
        commit("activeBug", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async createBugReport({ commit, dispatch }, data) {
      try {
        let res = await api.post("bugs", data);
        let today = new Date();
        const dateOptions = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        res.data.modified = today.toLocaleDateString("en-US", dateOptions);
        commit("addNewBug", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async editBugReport({ commit, dispatch }, data) {
      try {
        let res = await api.put("bugs/" + data._id, data);
        const dateOptions = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        let modifiedDate = new Date(res.data.updatedAt);
        let creationDate = new Date(res.data.createdAt);
        res.data.modified = modifiedDate.toLocaleDateString(
          "en-US",
          dateOptions
        );
        res.data.creation = creationDate.toLocaleDateString(
          "en-US",
          dateOptions
        );
        commit("activeBug", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
