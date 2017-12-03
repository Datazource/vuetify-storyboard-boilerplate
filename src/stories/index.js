import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import MyButton from "./Button.vue";
import { linkTo } from "@storybook/addon-links";

import Welcome from "./Welcome.vue";

storiesOf("Welcome", module).add("to Storybook", () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo("Button") }
}));

storiesOf("Button", module)
  .add("button template", () => ({
    template: `<my-button :rounded="true">rounded</my-button>`
  }))
  .add("story as a component", () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>'
  }))
  .add("normal button", () => ({
    components: { MyButton },
    template: '<my-button :rounded="false">normal</my-button>'
  }));
