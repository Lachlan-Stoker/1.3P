<template>
  <section class="portfolio-home">
    <header class="portfolio-header">
      <h1>Lachlan Stoker</h1>
      <p>Student at Deakin University</p>
    </header>

    <section class="portfolio-intro">
      <p>
        I'm Lachlan, a student at Deakin University! I'm studying in I.T. and Arts,
        with an interest in programming and web design!
      </p>
    </section>

    <section class="portfolio-quick-links">
      <h2>Quick Links</h2>
      <div class="quick-links-grid">
        <div class="quick-links-card" v-for="link in links" :key="link.id">
          <a href="about" v-if="link.id==1">
            <img :src="link.image" :alt="link.name" />
            <h3>{{ link.name }}</h3>
          </a>
          <a href="concepts" v-if="link.id==2">
            <img :src="link.image" :alt="link.name" />
            <h3>{{ link.name }}</h3>
          </a>
          <a href="contact" v-if="link.id==3">
            <img :src="link.image" :alt="link.name" />
            <h3>{{ link.name }}</h3>
          </a>
        </div>
      </div>
    </section>

    <footer class="portfolio-footer">
      <p>
        Want to contact me? Here's my 
        <a href="mailto:s222233452@deakin.edu.au">email</a>!
      </p>
    </footer>
  </section>
</template>

<script setup>
import { ref } from "vue";

import linkImage1 from "../assets/images/profilepic.jpg";
import linkImage2 from "../assets/images/code-clipart.jpg";
import linkImage3 from "../assets/images/feedback-contact.jpg";

const links = ref([
  {
    id: 1,
    name: "About Me",
    image: linkImage1,
  },
  {
    id: 2,
    name: "Scripting Concepts",
    image: linkImage2,
  },
  {
    id: 3,
    name: "Contact Me",
    image: linkImage3,
  },
]);
</script>

<style scoped>
.portfolio-home {
  font-family: "Arial", sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.portfolio-header {
  text-align: center;
  margin-bottom: 50px;
}

.portfolio-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.portfolio-intro {
  text-align: center;
  margin-bottom: 50px;
}

.portfolio-quick-links {
  margin-bottom: 50px;
}

.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.quick-links-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%;
  transition: transform 0.3s, box-shadow 0.3s;
}

.quick-links-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.quick-links-card img {
  width: 100%;
  height: auto;
}

.quick-links-card h3 {
  text-align: center;
  padding: 10px 0;
}

.portfolio-footer {
  text-align: center;
}
</style>
