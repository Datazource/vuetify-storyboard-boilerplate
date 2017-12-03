<template>
<html>
  <head>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet"/>
    <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet"/>
  </head>
  <body>
      outer
      <slot></slot>
      outer
  </body>
</html>
</template>      

<script>
const log = () => console.log("layout");

export default {
  name: "layout",

  props: {
    showApp: {
      type: Function,
      default: log
    }
  },

  methods: {
    onClick(event) {
      event.preventDefault();
      this.showApp();
    }
  }
};
</script>