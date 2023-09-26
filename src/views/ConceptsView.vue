<template>
  <br>
  <button class="back-button" @click="router.go(-1)">Back</button>
  <div class="concepts">
    <h1>This is a concepts page</h1>
  </div>
  <button class="nav-link" @click="router.push('/concepts/shoppinglist')">Shopping List</button>
  <button class="nav-link" @click="router.push('/concepts/crud')">CRUD Example</button>
  <RouterView/>
</template>

<script setup>
import router from "../router";
import {RouterView} from "vue-router";
</script>
  
<style>
@media (min-width: 1024px) {
  .concepts {
    min-height: 10vh;
    display: flex;
    align-items: center;
  }
}

.nav-link {
  text-decoration: none;
  color: #3f744f;
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 1.1em;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 4px;
}

.nav-link:hover {
  background-color: #345e46;
  color: #bdc3c7;
}

.back-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
