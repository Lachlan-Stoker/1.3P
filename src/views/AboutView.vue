<template>
  <br>
  <button class="back-button" @click="router.go(-1)">Back</button>
  <section class="about-me-page">
    <div class="profile-image">
      <img
        src="../assets/images/profilepic.jpg"
        alt="Lachlan Stoker Profile Picture"
        class="img-formatting"
      />
    </div>
    <div class="about-content">
      <h1>About Me</h1>
      <p>
        Hi, I'm Lachlan! I'm currently studying at Deakin University, in my second year of
        my Bachelor of Arts/Bachelor of Information Technology.
      </p>
      <p>
        In my time at Deakin, I have studied many units that deepen my understanding of
        website creation and coding in general. I am familiar with the basics of languages
        such as C++, HTML, JavaScript, and others.
      </p>
      <p>
        Going forward, I am looking to continue my studies in the I.T. field, as well as
        branching out and seeing where I could apply my skills!
      </p>
      <p>
        If you have any questions or otherwise want to contact me,
        <a href="mailto:s222233452@deakin.edu.au">you can reach me here</a>,
        or
        <a href="contact">send feedback here</a>!
      </p>
    </div>
  </section>
</template>

<script setup>
import router from "../router";
</script>

<style scoped>
@media (min-width: 1024px) {
  .about-me-page {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    font-family: "Arial", sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #f4f4f4;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}

.profile-image {
  flex: 1;
  padding-right: 50px;
}

.profile-image img.img-formatting {
  max-width: 100%;
}

.about-content {
  flex: 2;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}

.about-content h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.about-content p {
  margin-bottom: 20px;
  line-height: 1.6;
}

.about-content a {
  text-decoration: none;
  transition: color 0.3s;
}

.about-content a:hover {
  color: #2d5975;
}

.download-btn {
  display: inline-block;
  background-color: #303460;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.download-btn:hover {
  background-color: #2d5975;
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