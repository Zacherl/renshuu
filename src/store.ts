import Vue from "vue";
import Vuex from "vuex";
import { State } from "@/models/state";
import { Student } from "@/models/student";
import {
  getItem,
  LocalStorageKey,
  removeKey,
  setItem
} from "@/util/storage.util";

Vue.use(Vuex);

// TODO lazy load from firebase if we have a student? Or just always create the students?
const state: State = {
  student: getItem(LocalStorageKey.renshuuStudent)
};

export const store = new Vuex.Store({
  state,
  mutations: {
    login(state: State, student: Student): void {
      setItem(LocalStorageKey.renshuuStudent, student);
      state.student = student;
    },
    logout(state: State): void {
      removeKey(LocalStorageKey.renshuuStudent);
      state.student = undefined;
    }
  }
});
