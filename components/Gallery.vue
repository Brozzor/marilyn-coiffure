<template>
  <section id="gallery" class="container our-gallery">
    <div class="g2-ic">
      <img src="images/g2.png" alt="Decoration galerie coiffure" />
    </div>
    <div class="g3-ic">
      <img src="images/g3.png" alt="Decoration galerie coiffure" />
    </div>
    <div class="row">
      <h2 class="heading-title">Ma Gallerie</h2>
      <div class="g1-ic">
        <img src="images/g1.png" alt="Decoration galerie coiffure" />
      </div>
      <div id="tab-1" class="tab-content current">
        <div class="tab-col">
          <div class="gallery-img">
            <a href="#" @click.prevent="openViewer(0)"
              ><img src="img/gallery/girl1.jpg" alt="Coiffure femme réalisée par Marilyn Coiffure à Poitiers"
            /></a>
          </div>
          <div class="gallery-img">
            <a href="#" @click.prevent="openViewer(1)"
              ><img src="img/gallery/girl2.jpg" alt="Coupe et coiffure femme par Marilyn à domicile"
            /></a>
          </div>
        </div>
        <div class="tab-col">
          <div class="gallery-img">
            <a href="#" @click.prevent="openViewer(2)"
              ><img src="img/gallery/men1.jpg" alt="Coupe homme et taille de barbe par Marilyn Coiffure"
            /></a>
          </div>
          <div class="gallery-img">
            <a href="#" @click.prevent="openViewer(3)"
              ><img src="img/gallery/girl3.jpg" alt="Coloration et brushing par Marilyn Coiffure Poitiers"
            /></a>
          </div>
        </div>
        <div class="tab-col">
          <div class="gallery-img">
            <a href="#" @click.prevent="openViewer(4)"
              ><img src="img/gallery/6.jpg" alt="Réalisation coiffure à domicile Marilyn Coiffure"
            /></a>
          </div>
          <div class="gallery-img">
            <a href="#" @click.prevent="openViewer(5)"
              ><img src="img/gallery/7.jpg" alt="Coiffure événement spécial par Marilyn Coiffure"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox viewer -->
    <div v-if="viewerOpen" class="lightbox-overlay" @click.self="closeViewer">
      <button class="lightbox-close" @click="closeViewer">&times;</button>
      <button v-if="currentIndex > 0" class="lightbox-prev" @click="prevImage">&#8249;</button>
      <img :src="images[currentIndex]" class="lightbox-image" :alt="'Réalisation coiffure ' + (currentIndex + 1) + ' par Marilyn Coiffure Poitiers'" />
      <button v-if="currentIndex < images.length - 1" class="lightbox-next" @click="nextImage">&#8250;</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      viewerOpen: false,
      currentIndex: 0,
      images: [
        'img/gallery/girl1.jpg',
        'img/gallery/girl2.jpg',
        'img/gallery/men1.jpg',
        'img/gallery/girl3.jpg',
        'img/gallery/6.jpg',
        'img/gallery/7.jpg',
      ],
    }
  },
  methods: {
    openViewer(index) {
      this.currentIndex = index
      this.viewerOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeViewer() {
      this.viewerOpen = false
      document.body.style.overflow = ''
    },
    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++
      }
    },
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    handleKeydown(e) {
      if (!this.viewerOpen) return
      if (e.key === 'Escape') this.closeViewer()
      if (e.key === 'ArrowRight') this.nextImage()
      if (e.key === 'ArrowLeft') this.prevImage()
    },
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeydown)
  },
}
</script>

<style scoped>
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.lightbox-image {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 4px;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  color: #fff;
  font-size: 48px;
  cursor: pointer;
  line-height: 1;
  z-index: 1;
}

.lightbox-close:hover {
  color: #917758;
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #fff;
  font-size: 64px;
  cursor: pointer;
  padding: 0 20px;
  line-height: 1;
  z-index: 1;
}

.lightbox-prev {
  left: 10px;
}

.lightbox-next {
  right: 10px;
}

.lightbox-prev:hover,
.lightbox-next:hover {
  color: #917758;
}
</style>