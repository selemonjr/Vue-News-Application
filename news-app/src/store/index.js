import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    HomeNews:[],
    HomeLoading:false,
    TechLoading:false,
    TechNews:[],
    BusinessLoading:false,
    BusinessNews:[],
    SportsLoading:false,
    SportsNews:[],
    HealthLoading:false,
    HealthNews:[],
    GeneralLoading:false,
    GeneralNews:[],
    ScienceNews:[],
    ScienceLoading:false,
  },
  mutations: {
    setHomeData(state,HomeNews) {
      state.HomeNews = HomeNews
  },
  setHomeLoadingTrue(state) {
      state.HomeLoading = true;
  },
  setHomeLoadingFalse(state) {
      state.HomeLoading = false;
  },
  setTechLoadingFalse(state) {
      state.TechLoading = false
  },
  setTechLoadingTrue(state) {
      state.TechLoading = true;
  },
  setTechNews(state,TechNews) {
      state.TechNews = TechNews;
  },

  setBusinessLoadingFalse(state) {
    state.BusinessLoading = false
},
setBusinessLoadingTrue(state) {
    state.BusinessLoading = true;
},
setBusinessNews(state,BusinessNews) {
    state.BusinessNews = BusinessNews;
},


setSportsLoadingFalse(state) {
    state.SportsLoading = false
},
setSportsLoadingTrue(state) {
    state.SportsLoading = true;
},
setSportsNews(state,SportsNews) {
    state.SportsNews = SportsNews;
},


setHealthLoadingFalse(state) {
    state.HealthLoading = false
},
setHealthLoadingTrue(state) {
    state.HealthLoading = true;
},
setHealthNews(state,HealthNews) {
    state.HealthNews = HealthNews;
},

setGeneralLoadingFalse(state) {
    state.GeneralLoading = false
},
setGeneralLoadingTrue(state) {
    state.GeneralLoading = true;
},
setGeneralNews(state,GeneralNews) {
    state.GeneralNews = GeneralNews;
},



setScienceLoadingFalse(state) {
    state.ScienceLoading = false
},
setScienceLoadingTrue(state) {
    state.ScienceLoading = true;
},
setScienceNews(state,ScienceNews) {
    state.ScienceNews = ScienceNews;
},


  },
  actions: {
    PageNews({commit}) {
    commit('setHomeLoadingTrue')
    const API_KEY = "14779e6724cb4d29b72138730af57196";
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${API_KEY}`)
    .then(response => {
        commit('setHomeLoadingFalse')
        commit('setHomeData',response.data.articles)
    })
},

TechNews({commit}) {
    commit('setTechLoadingTrue')
    const API_KEY = "14779e6724cb4d29b72138730af57196";
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=100&apiKey=${API_KEY}`)
    .then(response => {
        commit('setTechLoadingFalse')
        commit('setTechNews',response.data.articles)
    })
},

BusinessNews({commit}) {
    commit('setBusinessLoadingTrue')
    const API_KEY = "14779e6724cb4d29b72138730af57196";
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=100&apiKey=${API_KEY}`)
    .then(response => {
        commit('setBusinessLoadingFalse')
        commit('setBusinessNews',response.data.articles)
    })
},


SportsNews({commit}) {
    commit('setSportsLoadingTrue')
    const API_KEY = "14779e6724cb4d29b72138730af57196";
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=100&apiKey=${API_KEY}`)
    .then(response => {
        commit('setSportsLoadingFalse')
        commit('setSportsNews',response.data.articles)
    })
},


HealthNews({commit}) {
    commit('setHealthLoadingTrue')
    const API_KEY = "14779e6724cb4d29b72138730af57196";
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&pageSize=100&apiKey=${API_KEY}`)
    .then(response => {
        commit('setHealthLoadingFalse')
        commit('setHealthNews',response.data.articles)
    })
},


ScienceNews({commit}) {
    commit('setScienceLoadingTrue')
    const API_KEY = "14779e6724cb4d29b72138730af57196";
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=100&apiKey=${API_KEY}`)
    .then(response => {
        commit('setScienceLoadingFalse')
        commit('setScienceNews',response.data.articles)
    })
},




GeneralNews({commit}) {
    commit('setGeneralLoadingTrue')
    const API_KEY = "14779e6724cb4d29b72138730af57196";
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=100&apiKey=${API_KEY}`)
    .then(response => {
        commit('setGeneralLoadingFalse')
        commit('setGeneralNews',response.data.articles)
    })
},


  },
  modules: {},
});
