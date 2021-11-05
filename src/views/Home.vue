<template>
  <navbar />
  <div>
    <carousel>
      <slide>
        1
      </slide>
      <slide>
        2
      </slide>
      <slide>
        3
      </slide>
      <slide>
        4
      </slide>
    </carousel>
  </div>
</template>

<script>
import Navbar from "../components/global/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>