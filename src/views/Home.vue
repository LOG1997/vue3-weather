<script lang="ts">
import { defineComponent, ref } from "vue";
import Foot from "../components/Footer/Footer.vue";
import { getWeatherAll } from "../api/request";
export default defineComponent({
  name: "Home",
  components: {
    Foot,
  },
  setup() {
    const weather = ref([]);
    console.log("getetete",getWeatherAll)
    let location = localStorage.getItem("lat");
    function getWeather() {
      getWeatherAll(location).then((res: any) => {
        weather.value = res.data;
        console.log(res);
      });
    }
    getWeather();
    return {
      weather, getWeather
    }
  },
});
</script>
<template>
  <h2>APP-Home</h2>
  <p>{{ weather }}</p>
  <Foot></Foot>
</template>
<style scoped></style>
