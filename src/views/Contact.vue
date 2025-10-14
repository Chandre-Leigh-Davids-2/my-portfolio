<template>
  <div class="container-fluid contact-section">
    <div class="row">
      <!-- Left Side -->
      <div class="col-md-3 contact-img-div d-flex align-items-center justify-content-center">
        <img src="../assets/images/image-of-self.png" alt="Profile" class="contact-img" />
      </div>

      <!-- Right Side -->
      <div class="col-md-9 p-5">
        <h1 class="mont-primary mb-4 text-white">Let’s Make Something Great!</h1>

        <div class="row mt-5">
          <!-- Contact Info -->
          <div class="col-md-6 text-white">
            <h2 class="noto-primary">Reach Out Anytime</h2>
            <div class="contact-line mb-4"></div>

            <ul class="contact-info mt-5">
              <li><span class="contact-icon"><img src="../assets/images/Call.png" alt="Call"></span><a href="tel:+27733253129">+27 73 325 3129</a></li>
              <li><span class="contact-icon"><img src="../assets/images/Email.png" alt="Email"></span> chandreleighdavids.17@gmail.com</li>
              <li><span class="contact-icon"><img src="../assets/images/location.png" alt="Location"></span> Rocklands, Mitchell’s Plain, 7785</li>
            </ul>
          </div>

          <!-- Contact Form -->
          <div class="col-md-6">
            <form class="contact-form shadow-lg">
              <div class="d-flex gap-2 mb-3">
                <label for="Name">Name<input type="text" required /></label>
                <label for="Surname">Surname<input type="text" required /></label>
              </div>
              <label for="Email Address">Email Address<input type="email" class="mb-3" required /></label>
              <label for="Message">Message<textarea rows="4" required></textarea></label>
              <button type="submit" class="send-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
};
</script>

<style src="../assets/styles/styles.css"></style>
