<template>
  <section>
    <div class="container">
      <h1>Home</h1>
      <div v-for="blog in blogs" :key="blog.id" class="grid grid--1-cols">
        <div class="blog">
          <h2>{{ blog.title }}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur consectetur doloremque sunt ducimus enim iure animi fugit nulla et! Perferendis autem deleniti quo eum corrupti reiciendis voluptatem ab ducimus?</p>

          <div class="icons">
            <p>
              <span>upvote or downvote this article: </span><br><br>
              <span class="material-icons">thumb_up</span>
              <span class="material-icons">thumb_down</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const blogs = ref([
      { title: 'Why Coffee is Better than Tea', id: 1 },
      { title: '...Then I Took an Arrow in the Knee', id: 2 },
      { title: 'Mario vs Luigi, Ultimate Showdown', id: 3 },
    ])
    //
    //
    return { blogs }
  },
  //
}
//
</script>


<style scoped>
.blog {
  border: 2px solid var(--secondary);
  padding: 3rem 2rem 3rem 3rem;
}
.material-icons {
  cursor: pointer;
  color: var(--third);
}
</style>