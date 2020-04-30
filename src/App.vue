<template>
  <v-app id="inspire">
    <v-app-bar v-if="state.student" color="primary" app clipped-left dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>練習</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch v-model="dark" color="secondary" hide-details></v-switch>
    </v-app-bar>

    <v-navigation-drawer v-if="state.student" v-model="drawer" app clipped>
      <v-layout column fill-height>
        <v-list dense>
          <v-list-group
            v-for="(exercises, topic) in topics"
            :key="topic"
            prepend-icon="mdi-book-open-page-variant"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-title>
                {{ $t(`topics.${topic}.name`) }}
              </v-list-item-title>
            </template>

            <v-list-item
              v-for="(_, exercise) in exercises"
              :key="exercise"
              link
              :to="`/topic/${topic}/${exercise}`"
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ $t(`topics.${topic}.exercises.${exercise}`) }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>

        <v-spacer></v-spacer>

        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                {{ state.student.matriculationNumber }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ state.student.course }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-action>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ $t("navigation.logout") }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-layout>
    </v-navigation-drawer>

    <v-content> <router-view /></v-content>

    <v-footer v-if="state.student" color="primary" app dark></v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { getBoolean, LocalStorageKey, setBoolean } from "@/util/storage.util";
import { TOPICS } from "@/config/config";
import { store } from "@/store";
import router from "@/router";

export default Vue.extend({
  name: "App",

  store,

  data: () => ({
    dark: getBoolean(LocalStorageKey.renshuuDarkTheme),
    drawer: false,
    state: store.state,
    topics: TOPICS
  }),

  watch: {
    dark(dark: boolean): void {
      this.$vuetify.theme.dark = dark;
      setBoolean(LocalStorageKey.renshuuDarkTheme, dark);
    }
  },

  methods: {
    logout(): void {
      this.drawer = false;
      this.$store.commit("logout");
      void router.push("/login");
    }
  }
});
</script>
