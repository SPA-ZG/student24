
<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.dark-mode {
  background-color: #121212; /* Dark background color */
}

.dark-mode #app {
  color: #ffffff; /* White text color in dark mode */
}

</style>
