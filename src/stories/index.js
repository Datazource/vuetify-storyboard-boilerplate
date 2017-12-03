import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import MyButton from "./Button.vue";

storiesOf("MyButton", module)
  .add("good", () => ({
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
