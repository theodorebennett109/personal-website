<style scoped lang="scss" src="./default.scss"></style>
<script lang="ts" src="./default.ts"></script>
<template>
  <div class="[ default ]">
    <!-- Header -->
    <div class="[ h-12 sticky z-20 ]">
      <NavBar />
    </div>

    <!-- Body -->
    <div class="[ grid ]">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>
