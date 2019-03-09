<template>
<div>
  <b-container fluid>
    <b-container>
    <b-row>
      <b-col>
         <b-card
    v-bind:title="this.myGitHubData.repositories[0].description"
    v-bind:img-src="this.myGitHubData.repositories[0].owner.avatar_url"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 shadow-lg"
  >
    <b-card-text>
      {{this.myGitHubData.repositories[0].html_url}}
  </b-card-text>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
      </b-col>
    </b-row>
    </b-container>
  </b-container>
</div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import GitHubAPI from 'vue-github-api'

// vue-resource is needed too
Vue.use(VueResource)

// import vue-github-api
Vue.use(GitHubAPI, { token: 'ac4b8848cef2a4daaf5dd98ab9f7e15de0b93f02' })

export default {
  data () {
    return {
      myGitHubData: {}
    }
  },
  mounted: function () {
// from a .vue component
this.GitHubAPI.get('/users/mninozebra/repos', {}, [this.myGitHubData, 'repositories'])
  },
  computed: {
    repositoriesCount: function () {
      if (this.myGitHubData.repositories) {
        return this.myGitHubData.repositories.length
      }
      return 'none yet...'
    }
  }
}
</script>

<style scoped>
.container {
  font-size: 20px;
  text-align: center;
  padding-top: 100px;
}
</style>
