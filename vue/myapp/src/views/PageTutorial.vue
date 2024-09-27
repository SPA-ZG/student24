
<template>
  <div>
    <h2>Programming Language Tutorials</h2>
    <ul>
      <li v-for="language in programmingLanguages" :key="language.id">
        <h3>{{ language.name }}</h3>
        <p>{{ language.description }}</p>
        <a :href="language.youtubeLink" target="_blank">Watch Tutorial</a>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PageTutorial',
  data() {
    return {
      programmingLanguages: [
        {
          id: 1,
          name: 'JavaScript',
          description: 'Learn JavaScript basics and advanced concepts.',
          youtubeLink: 'https://www.youtube.com/watch?v=2nZiB1JItbY'
        },
        {
          id: 2,
          name: 'Python',
          description: 'Explore the Python programming language.',
          youtubeLink: 'https://www.youtube.com/watch?v=kqtD5dpn9C8'
        },
        {
          id: 3,
          name: 'Java',
          description: 'Learn Java basics and advanced concepts.',
          youtubeLink: 'https://www.youtube.com/watch?v=eIrMbAQSU34'
        },
        {
          id: 4,
          name: 'C++',
          description: 'Learn C++ basics and advanced concepts.',
          youtubeLink: 'https://www.youtube.com/watch?v=ZzaPdXTrSb8'
        },
        {
          id: 5,
          name: 'C',
          description: 'Learn C basics and advanced concepts.',
          youtubeLink: 'https://www.youtube.com/watch?v=KJgsSFOSQv0'
        }
        
        
      ]
    };
  }
};
</script>

<style scoped>

h2 {
  color: #007bff; 
}

h3 {
  margin-bottom: 5px;
}

a {
  color: #28a745;
  text-decoration: none;
}
</style>
