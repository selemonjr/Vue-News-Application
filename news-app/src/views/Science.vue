    <template>
    <div>
        <div class="SciencePage">
            <div v-if="ScienceLoading" class="loading">
                <div class="loader"></div>
            </div>

       <div v-else class="NewsContent">
        <div v-for="item in ScienceNews" :key="item.id">
            <div class="NewsContainer">
              <div class="ImageContainer">
                  <a :href="item.url" target="_blank">
                <img :src="item.urlToImage" class="NewsImage"/>
                 </a>
              </div>
              <div class="NewsDescription">
                   <a :href="item.url" target="_blank" class="itemUrl">
                <h3 class="NewsHeadline">{{item.title}}</h3>
                   </a>
              </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name:"Science",
    computed: {
      ...mapState(["ScienceLoading","ScienceNews"])
    },
     created() {
         return this.$store.dispatch('ScienceNews');
    },
}
</script>
<style scoped>
.SciencePage {
        padding-top:70px;
}
.loading {
    margin-left:48%;
    margin-top:13%;
}
.loader {
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #ff0000; /* Blue */
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.itemUrl {
  text-decoration:none;
  color:#000;
}
.itemUrl:hover {
  text-decoration:underline;
  color:#000;
}
.NewsContent {
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    align-items:center;
}
.NewsContainer {
  width:300px;
  max-height:700px;
  background:#fff;
  margin:10px;
}
.NewsDescription {
  margin-left:3%;
  cursor:pointer;
}
.NewsImage {
    width:280px;
    height:200px;
    margin:10px;
}
.NewsHeadline:hover {
    text-decoration:underline;
}
@media(max-width:768px) {
    .headerSearch {
    text-align:center;
       margin-bottom:2%;
}
    input {
          padding:5px 5px;
        width:290px;
            margin-bottom:2%;
    }
    .loading {
    margin-left:44%;
    margin-top:30%;
}
.loader {
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #ff0000; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}
.NewsDescription {
    width:100%;
    max-height:300px;
}
 .NewsContainer {
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .NewsImage {
    width:100px;
    height:100px;
  }
  .NewsContent {
    font-size:14px;
    font-family:sans-serif;
        background:#fff;
  }
  .NewsContainer {
      margin:5px;
  }
}
</style>