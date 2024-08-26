<template>
  <section id="gallery" class="container our-gallery">
    <div class="g2-ic">
      <img src="images/g2.png" alt="" />
    </div>
    <div class="g3-ic">
      <img src="images/g3.png" alt="" />
    </div>
    <div class="row">
      <h2 class="heading-title">Ma Gallerie</h2>
      <div class="g1-ic">
        <img src="images/g1.png" alt="" />
      </div>
      <div id="tab-1" class="tab-content current">
        <div class="tab-col">
          <div class="gallery-img">
            <a class="fancybox" href="img/gallery/1.jpg" title=""
              ><img src="img/gallery/girl1.jpg" alt=""
            /></a>
          </div>
          <div class="gallery-img">
            <a class="fancybox" href="img/gallery/2.jpg" title=""
              ><img src="img/gallery/girl2.jpg" alt=""
            /></a>
          </div>
        </div>
        <div class="tab-col">
          <div class="gallery-img">
            <a class="fancybox" href="img/gallery/4.jpg" title=""
              ><img src="img/gallery/men1.jpg" alt=""
            /></a>
          </div>
          <div class="gallery-img">
            <a class="fancybox" href="img/gallery/5.jpg" title=""
              ><img src="img/gallery/girl3.jpg" alt=""
            /></a>
          </div>
        </div>
        <div class="tab-col">
          <div class="gallery-img">
            <a class="fancybox" href="img/gallery/6.jpg" title=""
              ><img src="img/gallery/6.jpg" alt=""
            /></a>
          </div>
          <div class="gallery-img">
            <a class="fancybox" href="img/gallery/7.jpg" title=""
              ><img src="img/gallery/7.jpg" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gallery',
}
</script>