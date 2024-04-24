<script>
import { store } from '../store.js';

  export default {
    data () {
      return {
        allEmergencyLinks: [
          {
            nameLink: 'Organic Food Shoop',
            linkURL: '#'
          }, {
            nameLink: 'Our Term and Condition',
            linkURL: '#'
          }, {
            nameLink: 'Gogrin Faq Section',
            linkURL: '#'
          }, {
            nameLink: 'Our Team Member',
            linkURL: '#'
          }, {
            nameLink: 'Our Latest News Feed',
            linkURL: '#'
          }
        ],
        gallery: [
          {
            imgURL: 'blo1-100x100.jpg'
          }, {
            imgURL: 'blo9-100x100.jpg'
          }, {
            imgURL: 'blo8-100x100.jpg'
          }, {
            imgURL: 'blo7-100x100.jpg'
          }, {
            imgURL: 'blo4-100x100.jpg'
          }, {
            imgURL: 'blo3-100x100.jpg'
          }, 
        ],
        store: store
      }
    }
  };
</script>

<template>

<footer>

  <!-- NEWSLWTTER -->
  <div class="mail-box container-sm">
    <div class="flex centered between">
      <h3 class="mail-title">
        SUBSCRIBE OUR NEWSLETTER
      </h3>
      <div>
        <input type="email" class="mail-input" placeholder="your email">
        <button class="mail-button">SEND</button>
      </div>
    </div>    
  </div>

  <!-- FOOTER INFO -->
  <div class="footer-info-container container-lg">
    <div class="footer-info container-sm">
      <ul class="flex gap-sm">
        <!-- Blocco brand e social -->
        <li class="col-3">
          <img class="footer-logo" src="/public/footer-logo.png" alt="">
          <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ut.</p>
          <div class="button-container flex gap-sm">
            <button class="social-button">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </button>
            <button class="social-button">
              <font-awesome-icon :icon="['fab', 'google-plus-g']" />
            </button>
            <button class="social-button">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </button>
            <button class="social-button">
              <font-awesome-icon :icon="['fab', 'pinterest']" />
            </button>
          </div>
        </li>
        <!-- Blocco link -->
        <li class="col-2">
          <h3 class="section-title">Emergency link.</h3>
          <ul class="flex column gap-sm">
            <li v-for="link in allEmergencyLinks">
              <a :href="`${ link.linkURL }`" class="paragraph">{{ link.nameLink }}</a>
            </li>
          </ul>
        </li>
        <!-- Blocco latest news -->
        <li class="col-4">
          <h3 class="section-title">Our Latest Blog.</h3>
          <ul class="flex column gap-sm">
            <li v-for="(blog, index) in store.allNews">
              <div v-if="index < 2" class="flex gap-sm">
                <img :src="`/public/${ blog.coverSmall }`" alt="" class="blog-img">
                <div>
                  <h4 class="blog-title">{{ blog.title }}</h4>
                  <p class="blog-date">{{ blog.date }}</p>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <!-- Blocco gallery -->
        <li class="col-3">
          <h3 class="section-title">Our Gallery.</h3>
          <ul class="gallery gap-sm">
            <li class="gallery-image" v-for="image in gallery">
              <img :src="`/public/${ image.imgURL }`" alt="">
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  <div>
    <div class="bottom-footer container-lg head-info">
            <div class="container-md flex between">
                <div class="paragraph">
                    Copyright © gogrin all right reserved.
                </div>
                <ul class="flex paragraph gap-md">
                  <li>
                    <a href="#">Service</a>
                  </li>
                  <li>
                    <a href="#">Pricing Table</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
            </div>
        </div>
  </div>

</footer>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

// NEWSLETTER

.mail-box {
  background-image: url(/public/counter-bg.jpg);
  padding: 35px 40px;
  color: variables.$white;
  position: relative;
  z-index: 9999;
}

.mail-input {
  padding: 10px 20px;
  border: none;
  width: 220px;
}

.mail-title {
  font-size: 25px;
}

.mail-button {
  background-color: variables.$brand-green;
  border: none;
  color: currentColor;
  padding: 10px 40px;
}


// INFO

.footer-info-container {
  background-image: url(/public/footer-bg.jpg);
  margin-top: -50px;
}

.footer-info {
  padding: 120px 0 60px 0;
  color: variables.$white;
}

.footer-logo {
  width: 130px;
  padding-bottom: 15px;
}

.button-container {
  margin-top: 20px;
}

.social-button {
  color: variables.$white;
  background-color: rgba(0, 0, 0, 0.279);
  border: none;
  border-radius: 3px;
  width: 30px;
  height: 30px;

    &:hover {
      background-color: variables.$brand-yellow;
    }
}

.section-title {
  font-size: 17px;
  padding-bottom: 20px;
}

.blog-img {
  width: 50px;
}

.blog-title {
  font-size: 13px;
  padding-bottom: 5px;
}

.blog-date {
  font-size: 11px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery-image {
  width: 29.6%;
}

.bottom-footer {
  color: variables.$white;
  background-color: variables.$brand-green;
  padding: 15px 0;
}

</style>