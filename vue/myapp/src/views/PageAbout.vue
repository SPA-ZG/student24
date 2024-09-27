<template>
  <div>
    <h2>About Programming Languages</h2>
    <div v-for="language in programmingLanguages" :key="language.id">
      <h3>{{ language.name }}</h3>
      <p>{{ language.description }}</p>
      <p>Common Use: {{ language.commonUse }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageAbout',
  data() {
    return {
      programmingLanguages: [
        {
          id: 1,
          name: 'JavaScript',
          description: 'JavaScript is a high-level, interpreted programming language.',
          commonUse: 'Web development, front-end, back-end (Node.js)'
        },
        {
          id: 2,
          name: 'Python',
          description: 'Python is a general-purpose, high-level programming language.',
          commonUse: 'Web development, data science, artificial intelligence'
        },
        {
          id: 3,
          name: 'Java',
          description: 'Java is a class-based, object-oriented programming language.',
          commonUse: 'Enterprise applications, mobile apps (Android), web development'
        },
        {
          id: 4,
          name: 'C++',
          description: 'C++ is a general-purpose programming language with object-oriented features.',
          commonUse: 'Game development, system/software development, embedded systems'
        },
        {
          id: 5,
          name: 'C',
          description: 'C is a procedural programming language with low-level features.',
          commonUse: 'System programming, operating systems, embedded systems'
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
</style>
