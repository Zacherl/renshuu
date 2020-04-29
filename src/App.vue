<template>
  <v-app id="inspire">
    <v-container v-if="student">
      <v-app-bar color="primary" app clipped-left dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>練習</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-switch v-model="dark" color="secondary" hide-details></v-switch>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" app clipped>
        <v-layout column fill-height>
          <v-list dense>
            <v-list-group
              v-for="(exercises, topic) in topics"
              :key="topic"
              prepend-icon="mdi-book-open-page-variant"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-title v-text="$t(`topics.${topic}.name`)" />
              </template>

              <v-list-item
                v-for="(_, exercise) in exercises"
                :key="exercise"
                link
                :to="`/topic/${topic}/${exercise}`"
              >
                <v-list-item-content>
                  <v-list-item-title
                    v-text="$t(`topics.${topic}.exercises.${exercise}`)"
                  />
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>

          <v-spacer></v-spacer>

          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title v-text="student.matriculationNumber" />
                <v-list-item-subtitle v-text="student.course" />
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="student = undefined">
              <v-list-item-action>
                <v-icon>mdi-exit-to-app</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="$t('navigation.logout')" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-layout>
      </v-navigation-drawer>

      <v-content> <router-view /></v-content>

      <v-footer color="primary" app dark></v-footer>
    </v-container>

    <login v-else v-on:login="student = $event"></login>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import {
  getBoolean,
  getItem,
  LocalStorageKey,
  setBoolean,
  setItem
} from "@/util/storage.util";
import { TOPICS } from "@/config/config";
import { Student } from "@/models/student";
import Login from "@/components/Login.vue";

export default Vue.extend({
  name: "App",

  components: {
    login: Login
  },

  data: () => ({
    dark: getBoolean(LocalStorageKey.renshuuDarkTheme),
    drawer: false,
    student: getItem<Student>(LocalStorageKey.renshuuStudent),
    topics: TOPICS
  }),

  watch: {
    dark(dark: boolean): void {
      this.$vuetify.theme.dark = dark;
      setBoolean(LocalStorageKey.renshuuDarkTheme, dark);
    },
    student(student?: Student): void {
      this.drawer = false;
      setItem(LocalStorageKey.renshuuStudent, student);
    }
  }
});
</script>
