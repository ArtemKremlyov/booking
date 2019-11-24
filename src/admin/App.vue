<template lang="pug">
  app-main


</template>
<script>
export default {
  components:{
      appMain: () => import("components/main-app"),

      
  }

}
</script>

<style>
@import './../styles/mixins.pcss';
@import "normalize.css";
@import './../styles/layout/base.pcss';
@import './../styles/blocks/one.pcss';
@import '/../styles/blocks/two.pcss';
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,700i,900,900i&display=swap');

</style>