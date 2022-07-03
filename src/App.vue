<template>
  <div class="antialiased">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { logLabeled } from '@/utils/logger';
import Navbar from './components/Layout/Navbar/index.vue';
import Footer from './components/Layout/Footer.vue';
logLabeled('I\'m ready!  ⸜(๑\'ᵕ\'๑)⸝⋆*', 'log', '', 'color: #66ccff');
</script>
