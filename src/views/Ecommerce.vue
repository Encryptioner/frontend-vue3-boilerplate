<template>
  <div class="min-h-screen">
    <div class="navbar flex-wrap bg-base-100">
      <div class="flex-wrap gap-1">
        <ul
          v-for="(navMenu, i) of navMenus"
          :key="i"
          class="menu menu-horizontal rounded-[10px] p-0"
          :class="{ 'bg-new-blue-5': focusedNavMenu == i }"
          @click="focusedNavMenu = i"
        >
          <li>
            <div class="flex min-w-[64px] flex-none flex-col gap-0 px-3 pt-2 pb-1">
              <img
                class="mb-1 h-5 w-5"
                :src="focusedNavMenu === i ? navMenu.activeIcon : navMenu.inactiveIcon"
              />
              <span
                class="text-sm"
                :class="
                  focusedNavMenu === i
                    ? 'font-medium text-new-blue-60'
                    : 'font-normal text-new-gray-50'
                "
                >{{ navMenu.title }}</span
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import hanger from '@/assets/ecommerce/top-nav/hanger.svg';
import hangerActive from '@/assets/ecommerce/top-nav/hanger-active.svg';
import babysitter from '@/assets/ecommerce/top-nav/babysitter.svg';
import babysitterActive from '@/assets/ecommerce/top-nav/babysitter-active.svg';
import barley from '@/assets/ecommerce/top-nav/barley.svg';
import barleyActive from '@/assets/ecommerce/top-nav/barley-active.svg';
import cinema from '@/assets/ecommerce/top-nav/cinema.svg';
import cinemaActive from '@/assets/ecommerce/top-nav/cinema-active.svg';
import concert from '@/assets/ecommerce/top-nav/concert.svg';
import concertActive from '@/assets/ecommerce/top-nav/concert-active.svg';
import fitness from '@/assets/ecommerce/top-nav/fitness.svg';
import fitnessActive from '@/assets/ecommerce/top-nav/fitness-active.svg';
import nuclearStation from '@/assets/ecommerce/top-nav/nuclear-station.svg';
import nuclearStationActive from '@/assets/ecommerce/top-nav/nuclear-station-active.svg';
import observation from '@/assets/ecommerce/top-nav/observation.svg';
import observationActuve from '@/assets/ecommerce/top-nav/observation-active.svg';
import pets from '@/assets/ecommerce/top-nav/pets.svg';
import petsActive from '@/assets/ecommerce/top-nav/pets-active.svg';
import powerstation from '@/assets/ecommerce/top-nav/powerstation.svg';
import powerstationActive from '@/assets/ecommerce/top-nav/powerstation-active.svg';
import resturant from '@/assets/ecommerce/top-nav/resturant.svg';
import resturantActive from '@/assets/ecommerce/top-nav/resturant-active.svg';
import shipWheel from '@/assets/ecommerce/top-nav/ship-wheel.svg';
import shipWheelActive from '@/assets/ecommerce/top-nav/ship-wheel-active.svg';

const focusedNavMenu: Ref<number> = ref(0);
interface INavMenu {
  title: string;
  inactiveIcon: string;
  activeIcon: string;
}

const navMenus: Ref<INavMenu[]> = ref([
  { title: 'Clothing & Shoes', inactiveIcon: hanger, activeIcon: hangerActive },
  { title: 'Entertainment', inactiveIcon: cinema, activeIcon: cinemaActive },
  { title: 'Music', inactiveIcon: concert, activeIcon: concertActive },
  { title: 'Sport & Lifestyle', inactiveIcon: fitness, activeIcon: fitnessActive },
  { title: 'Pets', inactiveIcon: pets, activeIcon: petsActive },
  { title: 'Kitchen', inactiveIcon: resturant, activeIcon: resturantActive },
  { title: 'Travel Equipment', inactiveIcon: observation, activeIcon: observationActuve },
  { title: 'Growing & Garden', inactiveIcon: barley, activeIcon: barleyActive },
  { title: 'Electrical Tools', inactiveIcon: powerstation, activeIcon: powerstationActive },
  { title: 'Mother care', inactiveIcon: babysitter, activeIcon: babysitterActive },
  { title: 'Toys & Entertainment', inactiveIcon: nuclearStation, activeIcon: nuclearStationActive },
  { title: 'Vintage', inactiveIcon: shipWheel, activeIcon: shipWheelActive },
]);
</script>
<style scoped></style>
