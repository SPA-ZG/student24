<!-- src/views/BlogComponent.vue -->

<template>
  <div>
    
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <button @click="toggleDarkMode">Light/Dark Mode</button>
    <br>
    <br>

    <router-link to="/pageTutorial">Programming Tutorials</router-link><br>
    <router-link to="/pageAbout">About Programming Languages</router-link>

  <hr>
    <h3>Vote for Your Favorite Programming Languages:</h3>
    <ul style="list-style: none; padding: 0;">
      <li v-for="language in programmingLanguages" :key="language.id">
        <label style="display: block; margin-bottom: 10px;">
          <input type="checkbox" v-model="selectedLanguages" :value="language.name" />
          {{ language.name }}
        </label>
      </li>
    </ul>

    <p>Your selected languages: {{ selectedLanguages.join(', ') }}</p>
    <p>Total Selected Languages: {{ totalSelectedLanguages }}</p>

    <VoteButton @vote="handleVote" />
    <p v-if="voteMessage">{{ voteMessage }}</p>

    <VotingStatistics :selectedLanguages="selectedLanguages" />
  </div>
</template>

<script>
import VoteButton from '@/components/VoteButton.vue'; //statless
import VotingStatistics from '@/components/VotingStatistics.vue'; //stateful

export default {
  components: {
    VoteButton,
    VotingStatistics
  },
  data() {
    return {
      title: "BlogIT",
      content: "let's talk IT out!",
      darkMode: false,
      programmingLanguages: [
        { id: 1, name: "JavaScript" },
        { id: 2, name: "Python" },
        { id: 3, name: "Java" },
        { id: 4, name: "C++" },
        { id: 5, name: "Ruby" },
        { id: 6, name: "C" },
        { id: 7, name: "C#" },
        { id: 8, name: "Kotlin" }
        
      ],
      selectedLanguages: [],
      voteCount: 0,
      voteMessages: [
        "Thanks for voting!",
        "You voted successfully. Thank you!",
        "Your vote has been recorded. Thanks!"
      ],
      voteMessage: null,
      componentCreationMessage: "Welcome to BlogIT! This component has been created.",
      showWelcomeMessage: false
    };
  },
  created() {
    // This code will be executed when the component is created
    console.log("BlogIT component has been created.");
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      this.updateGlobalStyles();
    },
    updateGlobalStyles() {
      const body = document.body;
      if (this.darkMode) {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
    },
    handleVote() {
      this.voteCount++;

      // Select a random message from the array
      const randomIndex = Math.floor(Math.random() * this.voteMessages.length);
      this.voteMessage = this.voteMessages[randomIndex];
    }
  },
  computed: {
    totalSelectedLanguages() {
      return this.selectedLanguages.length;
    }
  }
};
</script>

<style scoped>
/* Scoped styles for this component only */

ul {
  margin-left: 20px; 
}

p {
  font-weight: bold; 
}

/* Style for checkboxes */
input[type="checkbox"] {
  margin-right: 5px; 
  vertical-align: middle;
}


</style>