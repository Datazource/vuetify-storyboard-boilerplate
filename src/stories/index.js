import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import { linkTo } from "@storybook/addon-links";

import Welcome from "./Welcome.vue";
import MyButton from "./Button.vue";
import Layout from "./Layout.vue";

storiesOf("Welcome", module).add("to Storybook", () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo("Button") }
}));

storiesOf("Button", module)
  .add("button template", () => ({
    template: '<my-button :rounded="true">round</my-button>'
  }))
  .add("rounded button", () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>'
  }))
  .add("normal button", () => ({
    components: { MyButton },
    template: '<my-button :rounded="false">normal</my-button>'
  }));

storiesOf("Layout", module)
  .add("with button", () => ({
    components: { Layout, MyButton },
    template:
      '<layout><my-button :rounded="false">my button</my-button></layout>'
  }))
  .add("with button rounded", () => ({
    components: { Layout, MyButton },
    template:
      '<layout><my-button :rounded="true">my button</my-button></layout>'
  }));
