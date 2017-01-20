<template>
  <div id="app">
    <img src="./assets/logo.png">
    <dialect></dialect>
    <mintStarter></mintStarter>
    <hello></hello>
    <router-link to="/login">Go to login</router-link>
    <router-link to="/home">Go to home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Dialect from './components/Dialect'
import MintStarter from './components/MintStarter'
export default {
  name: 'app',
  components: {
    Hello, Dialect, MintStarter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
