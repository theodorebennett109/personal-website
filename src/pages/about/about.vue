<style scoped lang="scss" src="./about.scss"></style>
<script lang="ts" src="./about.ts"></script>
<template>
  <div class="[ about ][ flex justify-center ][ py-5 ]">
    <div class="[ w-3/4 ][ flex justify-center text-black ]">
      <div>
        <!-- image -->
        <div class="[ flex justify-center ]">
          <img
            class="[ rounded-full max-w-200 ]"
            src="@/assets/theo2.jpg"
            alt=""
          />
        </div>

        <!-- Name -->
        <div class="[ my-3 ][ flex justify-center ]">
          <p class="[ font-medium text-2xl ]">Theodore Bennett</p>
        </div>

        <div class="[ max-w-2xl ]">
          <p>
            Theodore Bennett is a motivated and skilled software engineer with
            professional experience in developing robust and efficient web
            applications. Proficient in Vue.js, Tailwind CSS, TypeScript,
            Cypress, and Jest, I am dedicated to delivering high-quality code
            and creating exceptional user experiences. With strong analytical
            skills and a collaborative mindset, I excel in working within
            cross-functional teams to achieve project goals. Seeking
            opportunities to contribute my expertise and grow as a software
            engineer in an innovative and dynamic environment.
          </p>
        </div>

        <div class="[ my-4 ]">
          <p class="[ font-medium text-lg text-center ]">Qualifications</p>

          <div>
            <p>BSc. in Electronics and Computer Science</p>
            <p>
              <i class="fa-solid fa-building-columns"></i> The University of the
              West Indies
            </p>
            <p>GPA: 3.30</p>
          </div>
        </div>

        <div class="[ my-4 ]">
          <p class="[ font-medium text-lg text-center ]">Skills</p>

          <div
            class="[ border-gray-500 border rounded-lg ][ p-4 ][ flex flex-wrap ][ max-w-2xl ]"
          >
            <div
              v-for="skill in skills"
              :key="skill"
              class="[ p-2 ][ m-2 ][ font-medium text-sm bg-gray-800 rounded-lg text-white ]"
            >
              {{ skill }}
            </div>
          </div>
        </div>

        <div class="[ my-4 ]">
          <p class="[ font-medium text-lg text-center ]">Interest</p>

          <div
            class="[ border-gray-500 border rounded-lg ][ p-4 ][ flex flex-wrap ][ max-w-2xl ]"
          >
            <div
              v-for="item in interest"
              :key="item.name"
              class="[ p-2 ][ m-2 ][ font-medium text-sm bg-gray-800 rounded-lg text-white ]"
            >
              <i class="[ mx-1 ]" :class="item.icon"></i> {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
