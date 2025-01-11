<template>
  <div class="footer-wrapper">
    <div class="fotter-wrapper__credit">
      <span>© 2025 – Developed by me</span>
    </div>
    <div class="footer-wrapper__links">
      <a class="footer-link" href="https://www.linkedin.com/in/noelkampus/" target="_blank">LinkedIn</a>
      <a class="footer-link" href="https://www.instagram.com/noelkampus.design/" target="_blank">Instagram</a>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.footer-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 0 0 0;
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
</style>
