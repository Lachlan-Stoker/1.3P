<template>
  <footer class="style-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>About Me</h4>
        <p>
          I'm Lachlan, a student at Deakin University! I'm studying in I.T. and Arts,
          with an interest in programming and web design!
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Created with Vue.js</p>
    </div>
  </footer>
</template>

<style scoped>
.style-footer {
  background-color: #3f744f;
  color: #ecf0f1;
  padding: 40px 0;
  font-family: "Arial", sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-section {
  flex: 1;
  margin-right: 20px;
}

.footer-section:last-child {
  margin-right: 0;
}

.footer-section h4 {
  border-bottom: 2px solid #303460;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.footer-section p,
.footer-section li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #303460;
}

.footer-bottom {
  text-align: center;
  margin-top: 40px;
  border-top: 1px solid #345e46;
  padding-top: 20px;
}
</style>