<template>
  <div class="min-h-screen px-2">
    <!-- Top nav -->
    <div class="navbar flex-wrap border-b-2 border-gray-500 bg-base-100">
      <div class="flex-wrap gap-1">
        <ul
          v-for="(navMenu, i) of navMenus"
          :key="i"
          class="menu menu-horizontal rounded-[10px] p-0"
          @click="focusedNavMenu = i"
        >
          <li>
            <div class="flex min-w-[64px] flex-none flex-col gap-0 px-3 pt-2 pb-1">
              <img
                class="mb-1 h-5 w-5"
                :src="focusedNavMenu === i ? navMenu.activeIcon : navMenu.inactiveIcon"
              >
              <span
                class="text-sm"
                :class="
                  focusedNavMenu === i
                    ? 'font-medium text-new-blue-60'
                    : 'font-normal text-new-gray-50'
                "
              >{{ navMenu.title }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- Top nav end -->
    <!-- Filter dropdown -->
    <div class="mt-10 w-[355px] caret-transparent">
      <div class="relative inline-block w-[304px] text-left">
        <div>
          <button
            id="menu-button"
            type="button"
            class="flex w-full justify-between rounded-t bg-new-gray-0
            px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none"
            aria-expanded="true"
            aria-haspopup="true"
            :class="{ 'rounded-b !bg-white shadow-[0px_4px_4px_0px_#00000040]': !isFilterMenuOpen }"
            @click="isFilterMenuOpen = !isFilterMenuOpen"
          >
            <span>{{ isFilterMenuOpen ? 'Expanded filters' : 'Closed filters' }}</span>
            <ChevronDownIcon
              class="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
              :class="{ hidden: isFilterMenuOpen }"
            />
            <ChevronUpIcon
              class="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
              :class="{ hidden: !isFilterMenuOpen }"
            />
          </button>
        </div>

        <div
          class="absolute right-0 mt-0 w-full origin-top-right rounded-none
          rounded-b bg-new-gray-0 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
          :class="{ hidden: !isFilterMenuOpen }"
        >
          <div
            v-for="filter in ['Recommended', 'Recently Added', 'Expiring Soon']"
            :key="filter"
            class="flex py-1"
            role="none"
          >
            <input
              type="checkbox"
              :checked="filter === 'Recommended'"
              class="checkbox checkbox-xs mt-2.5 ml-4 rounded-none border-2
              border-new-gray-2 bg-[#E7E7E7] focus:ring-0"
            >
            <a
              id="menu-item-2"
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
            >{{ filter }}</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Filter dropdown end -->
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/solid';

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
const isFilterMenuOpen: Ref<boolean> = ref(true);
interface INavMenu {
  title: string;
  inactiveIcon: string;
  activeIcon: string;
}

const navMenus: INavMenu[] = [
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
];
</script>
<style scoped></style>
