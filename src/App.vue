<template>
  <v-app id="inspire">
    <v-app-bar color="primary" app clipped-left dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Mondai</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch v-model="dark" color="secondary" hide-details></v-switch>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-group no-action prepend-icon="mdi-book-open-page-variant">
          <template v-slot:activator>
            <v-list-item-title>Topics</v-list-item-title>
          </template>

          <v-list-group
            v-for="topic in topics"
            :key="topic.key"
            sub-group
            no-action
          >
            <template v-slot:activator>
              <v-list-item-title>
                {{ $t(`topic.${topic.key}.name`) }}
              </v-list-item-title>
            </template>

            <v-list-item
              v-for="exercise in topic.exercises"
              :key="exercise.key"
              link
              :to="`/${topic.key}/${exercise.key}`"
            >
              <v-list-item-title>
                {{ $t(`topic.${topic.key}.exercise.${exercise.key}`) }}
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-content> <router-view /></v-content>

    <v-footer color="primary" app dark></v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { getBoolean, LocalStorageKey, setBoolean } from "@/util/storage.util";
import { TOPICS } from "@/config/config";

export default Vue.extend({
  name: "App",

  data: () => ({
    dark: getBoolean(LocalStorageKey.mondaiDarkTheme),
    drawer: false,
    topics: TOPICS
  }),

  watch: {
    dark(dark: boolean) {
      this.$vuetify.theme.dark = dark;
      setBoolean(LocalStorageKey.mondaiDarkTheme, dark);
    }
  }
});
</script>
