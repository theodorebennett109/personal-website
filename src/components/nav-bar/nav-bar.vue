<style scoped lang="scss" src="./nav-bar.scss"></style>
<script lang="ts" src="./nav-bar.ts"></script>

<template>
  <div class="[ w-full h-full ]">
    <b-navbar type="is-dark">
      <template #brand>
        <b-navbar-item
          class="[ no-underline ]"
          tag="router-link"
          :to="{ path: '/' }"
        >
          <p class="[ font-bold text-xl font-sans ]">Theodore Bennett</p>
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item
          tag="router-link"
          :to="{ path: '/' }"
          class="[ no-underline ]"
        >
          <p>Home</p></b-navbar-item
        >
        <b-navbar-item
          tag="router-link"
          :to="{ path: '/about' }"
          class="[ no-underline ]"
        >
          <p>About</p></b-navbar-item
        >
        <b-navbar-item
          tag="router-link"
          :to="{ path: '/portfolio' }"
          class="[ no-underline ]"
        >
          <p>Portfolio</p></b-navbar-item
        >
        <b-navbar-item
          tag="router-link"
          :to="{ path: '/contact' }"
          class="[ no-underline ]"
        >
          <p>Contact</p></b-navbar-item
        >

        <b-navbar-item
          tag="a"
          href="https://drive.google.com/file/d/188e4MQa4t_c69JrwhXloFuxRt3nTkm4h/view?usp=sharing"
          target="_blank"
          class="[ no-underline ]"
        >
          <p>Resume</p>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>
