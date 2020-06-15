import { api } from "./AxiosService";

export const NoteStore = {
  state: {
    notes: [],
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes;
    },
    addNewNote(state, note) {
      state.notes.push(note);
    },
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },

    async getNotesByBugId({ commit, dispatch }, id) {
      try {
        let res = await api.get("bugs/" + id + "/notes");
        console.log(res.data);
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
        commit("setNotes", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async createNote({ commit, dispatch }, data) {
      try {
        let res = await api.post("bugs/" + data.bugId + "/notes", data);
        let today = new Date();
        const dateOptions = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        res.data.modified = today.toLocaleDateString("en-US", dateOptions);
        commit("addNewNote", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async deleteNote({ commit, dispatch }, data) {
      try {
        let res = await api.delete("notes/" + data._id);
        dispatch("getNotesByBugId", data.bug);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
