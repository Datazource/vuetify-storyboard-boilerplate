import { configure } from "@storybook/vue";

import { action } from "@storybook/addon-actions";

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { linkTo } from "@storybook/addon-links";
import { withNotes } from "@storybook/addon-notes";

import Vuetify from "vuetify";
Vue.use(Vuetify);

import Vue from "vue";
// import Vuex from "vuex";

// import MyButton from "../src/stories/Button.vue";

// Vue.component("my-button", MyButton);
//Vue.use(Vuex);

function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);
