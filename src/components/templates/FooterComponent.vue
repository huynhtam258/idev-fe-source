<template>
  <footer>
    <div class="footer-main">
      <div class="container footer-main-container">
        <div class="row">
          <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
            <div class="block-content">
              <!-- heading -->
              <h6>Product</h6>
              <!-- links -->
              <ul>
                <li><a href="team.html">Teams</a></li>
                <li><a href="blog.html">Blogs</a></li>
                <li><a href="FAQ.html">FAQs</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
            <div class="block-content">
              <!-- heading -->
              <h6>Resources</h6>
              <!-- links -->
              <ul>
                <li><a href="sign-up.html">Singup</a></li>
                <li><a href="sign-in.html">Login</a></li>
                <li><a href="blog.html">Blog</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
            <div class="block-content">
              <!-- heading -->
              <h6>Company</h6>
              <!-- links -->
              <ul>
                <li><a href="career.html">Career</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="team.html">Investor</a></li>
                <li><a href="privacy.html">Terms</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
            <div class="block-content">
              <!-- heading -->
              <h6>Company</h6>
              <!-- links -->
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="privacy-policy.html">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
.footer-main {
  padding: 92px 0;
  background-color: var(--black1);
  &-container {
    .row {
      justify-content: space-around;
    }
  }
  .block-content {
    h6 {
      font-weight: bold;
      font-size: 14px;
      text-transform: uppercase;
      color: var(--light);
      margin-bottom: 25px;
    }
    ul {
      padding: 0;
      li {
        margin-bottom: 10px;
        list-style: none;
        a {
          font-size: 14px;
          color: var(--gray-1);
          transition: 0.2s ease;
          &:hover {
            color: var(--light);
          }
        }
      }
    }
  }
}
</style>