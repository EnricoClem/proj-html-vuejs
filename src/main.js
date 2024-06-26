import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faLocationDot, faEnvelope, faMagnifyingGlass, faCartShopping, faAngleDown, faAngleRight, faAngleLeft, faHeart, faEye, faQuoteLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faPinterest, faWhatsapp, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

library.add(faLocationDot, faEnvelope, faClock, faFacebookF, faTwitter, faInstagram, faPinterest, faMagnifyingGlass, faCartShopping, faAngleDown, faAngleRight, faAngleLeft, faHeart, faEye, faQuoteLeft, faWhatsapp, faUser, faGooglePlusG)

const app = createApp(App);

app.component('font-awesome-icon',FontAwesomeIcon);
app.mount('#app');