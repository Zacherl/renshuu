<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>
              {{ $t("components.login.title") }}
            </v-toolbar-title>
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
            <v-btn color="primary" :loading="loading" @click="login">
              {{ $t("components.login.button") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="failed">
      {{ $t("components.login.error") }}
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { COURSES } from "@/config/config";
import router from "@/router";

export default Vue.extend({
  name: "login",

  data: () => ({
    courses: COURSES,
    course: "",
    matriculationNumber: "",
    loading: false,
    failed: false
  }),

  methods: {
    async login(): Promise<void> {
      this.loading = true;
      /* this.failed = !(await auth.login({
        course: this.course,
        matriculationNumber: this.matriculationNumber
      }));*/
      this.$store.commit("login", {
        course: this.course,
        matriculationNumber: this.matriculationNumber
      });
      await router.push("/");
      this.loading = false;
    }
  }
});
</script>
