<script lang="ts">
import { defineComponent, ref } from "vue";
import { getCurrentInstance } from "vue";
import axios from "axios";
import Location from "../components/TodayWeather/Location.vue";
export default defineComponent({
  components:{Location},
  setup() {
    let weatherdata = ref(new Array(0));
    const { proxy } = getCurrentInstance() as any;
    let location = "104.069153,30.546534";
    axios
      .get(proxy.$baseapi + "getWeather" + `?location=${location}`)
      .then((res) => {
        console.log(res);
        weatherdata.value = res.data.data;
      });
    return {
      weatherdata,
    };
  },
});
</script>
<template>
  <h1>Home</h1>
  weather: {{ weatherdata[0] }};
  city: {{ weatherdata[1] }};
  <div class="location bg-blue-500 w-100 h-200">
  <Location :location="weatherdata[1]"></Location>
  </div>
</template>
<style scoped></style>
