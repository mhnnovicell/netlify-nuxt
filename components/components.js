import Vue from 'vue'
import VueResource from 'vue-resource'
import GitHubAPI from 'vue-github-api'

// vue-resource is needed too
Vue.use(VueResource)

// import vue-github-api
Vue.use(GitHubAPI, { token: 'user Personal Access Token' })
