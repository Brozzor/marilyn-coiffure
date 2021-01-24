<template>
  <!--Testimonial section -->
  <section id="testimonial" class="container client-testimonial">
    <div class="row">
      <h2 class="heading-title">+5000 Clients satisfait</h2>

      <div class="testimonial-wrapper">
        <div class="arrow-prev">
          <span class="arrow">&#x2039;</span>
        </div>
        <div
          class="testimonial-main"
          v-for="(testimony, index) in testimonials"
          :key="index"
          v-show="index == 0"
        >
          <div class="testimonial-box">
            <p v-html="testimony.text"></p>
            <span
              ><b>{{ testimony.name }}</b></span
            >
          </div>
          <div class="test-img">
            <img src="images/testi-img.png" alt="" />
          </div>
        </div>
        <div class="arrow-next">
          <span class="arrow">&#x203A;</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimony',
  data() {
    return {
      testimonials: [
        {
          text: ` Lorem Ipsum is simply dummy text of the printing and typing indus try<br />Lorem Ipsum has een the indus try's stmmy text of the printing and<br /> typeseing industry.`,
          name: 'Devil Shohemark',
        },
        {
          text: ` Lorem Ipsum is simply dummy text of the printing and typing indus try<br />Lorem Ipsum has een the indus try's stmmy text of the printing and<br /> typeseing industry.`,
          name: 'Pauline Lefievre',
        },
      ],
    }
  },
}
</script>

<style>
.arrow {
  font-size: 65px;
  font-weight: bold;
  width: 17px;
  height: 9px;
  padding: 2px 0px;
  color: white;
  text-align: center;
  display: inline-block;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin-top: -49px;
  transition: all 0.3s ease;
}

.arrow:hover {
  color: #121212;
  background: white;
  cursor: pointer;
}
.arrow-left {
  left: -23px;
  transform: translateY(-50%);
}

.arrow-right {
  right: -23px;
  transform: translateY(-50%);
}
</style>