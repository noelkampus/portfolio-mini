<template>
  <div class="footer-wrapper">
    <div class="fotter-wrapper__credit">
      <span>© 2025 – Designed and developed by me</span>
    </div>
    <div class="footer-wrapper__links">
      <a class="footer-link" href="https://www.linkedin.com/in/noelkampus/" target="_blank">LinkedIn</a>
      <a class="footer-link" href="https://www.instagram.com/noelkampus.design/" target="_blank">Instagram</a>
      <a class="footer-link" href="https://github.com/noelkampus" target="_blank">GitHub</a>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.footer-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 3rem 0 0 0;
}

.footer-wrapper__credit {
  display: flex;
  flex-direction: column;
}

.footer-wrapper__links {
  display: flex;
  flex-direction: row;
  column-gap: $spacing-xxl;
}

.footer-link:hover {
  filter: blur(3px);
  transition: filter 0.2s ease-in-out;
}
</style>
