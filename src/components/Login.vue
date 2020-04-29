<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>{{
              $t("components.login.title")
            }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-select
                :label="$t('components.login.course')"
                :items="courses"
                name="course"
                v-model="course"
                prepend-icon="mdi-school"
              >
              </v-select>

              <v-text-field
                :label="$t('components.login.matriculation-number')"
                name="matriculationNumber"
                v-model="matriculationNumber"
                prepend-icon="mdi-account"
                type="text"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="login">
              {{ $t("components.login.button") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { COURSES } from "@/config/config";

export default Vue.extend({
  name: "login",

  model: {
    event: "login"
  },

  data: () => ({
    courses: COURSES,
    course: "",
    matriculationNumber: ""
  }),

  methods: {
    login(): void {
      this.$emit("login", {
        course: this.course,
        matriculationNumber: this.matriculationNumber
      });
    }
  }
});
</script>
