import Vue from "vue";
import Vuetify from "vuetify/lib";
import de from "vuetify/src/locale/de";
import { getBoolean, LocalStorageKey } from "@/util/storage.util";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: getBoolean(LocalStorageKey.mondaiDarkTheme)
  },
  lang: {
    locales: { de },
    current: "de"
  }
});
