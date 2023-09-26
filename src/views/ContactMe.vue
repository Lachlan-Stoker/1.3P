<template>
  <br>
  <button @click="router.go(-1)">Back</button>
    <div class="about-us-form">
      <h2>Feedback</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
  
        <div class="form-group">
          <label for="feedback">Feedback:</label>
          <textarea id="feedback" v-model="formData.feedback" required></textarea>
        </div>
  
        <button type="submit">Submit</button>
      </form>
    </div>
    <br>
    <div class="body-text">
      My email:
      <a href="mailto:s222233452@deakin.edu.au">s222233452@deakin.edu.au</a>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import router from "../router";
  
  const formData = ref({
    name: "",
    email: "",
    feedback: "",
  });
  
  const handleSubmit = () => {
    console.log(formData.value);
  
    formData.value = {
      name: "",
      email: "",
      feedback: "",
    };
  };
  </script>
  
  <style scoped>
  .about-us-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .body-text {
    text-align: center;
    margin-bottom: 50px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>