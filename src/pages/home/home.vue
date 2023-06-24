<style scoped lang="scss" src="./home.scss"></style>
<script lang="ts" src="./home.ts"></script>
<template>
  <div class="[ home ]">
    <div
      class="[ flex lg:flex-row flex-col ][ justify-center items-center ][ p-16 ]"
    >
      <div class="[ m-10 ]">
        <img
          class="[ max-w-256 rounded-full ]"
          src="@/assets/theo.jpg"
          alt=""
        />
      </div>

      <div class="[ max-w-md ]">
        <p class="[ font-semibold text-3xl ]">Hi, I'm Theodore Bennett</p>
        <p>Welcome to my personal website.</p>

        <p>
          My work life quote is
          <span>
            "The task isn't easy. It isn't hard. Just get the job done!"
          </span>
        </p>
        <p>
          To delve deeper into Theodore's journey, explore the
          <router-link to="/about">About</router-link> page.
        </p>
      </div>
    </div>
  </div>
</template>
