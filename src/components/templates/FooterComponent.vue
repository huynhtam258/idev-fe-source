<template>
<footer>
  <div class="footer-main">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
          <div class="block-2">
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
          <div class="block-2">
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
          <div class="block-2">
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
          <div class="block-2">
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
  background: #1a1b1f;
  .footer-main {
    .container {
      .row {
        justify-content: space-around;
      }
    }
  }
}
.footer-main .block-2 h6 {
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 25px;
}

.footer-main .block-2 ul {
  padding: 0;
}

.footer-main .block-2 ul li {
  margin-bottom: 10px;
  list-style: none;
}

.footer-main .block-2 ul li a {
  font-size: 14px;
  color: #6f6f71;
  transition: .2s ease;
}

.footer-main .block-2 ul li a:hover {
  color: #fff;
}

.footer-classic {
  background: #fafafa;
  text-align: center;
  padding: 110px 0;
}

.footer-classic ul.social-icons {
  margin-bottom: 30px;
}

</style>