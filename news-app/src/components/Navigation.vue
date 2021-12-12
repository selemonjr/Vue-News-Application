<template>
  <div>
      <nav>
          <div class="headerLogo">
              <h2 class="newsLogo"><span class="colorNews">i</span>News</h2>
          </div>
          <div class="headerLinks">
              <ul v-show="!mobile">
                  <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/tech">Tech</router-link></li>
                      <li><router-link to="/business">Business</router-link></li>
                        <li><router-link to="/sports">Sports</router-link></li>
                          <li><router-link to="/health">Health</router-link></li>
                              <li>More
                               <div class="dropdown">
                                   <ul>
                                        <li><router-link to="/science">Science</router-link></li>
                                        <li><router-link to="/general">General</router-link></li>
                                   </ul>
                               </div>
                           </li>
              </ul>
          </div>
               <div v-show="mobile" v-cloak class="barButton" :class="{'bar-rotate':mobileNav}"  @click="handleRotate()" >
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
          <transition name="slide">
            <ul v-show="mobileNav" class="sidebar">
                  <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/tech">Tech</router-link></li>
                      <li><router-link to="/business">Business</router-link></li>
                        <li><router-link to="/sports">Sports</router-link></li>
                           <li><router-link to="/health">Health</router-link></li>
                                        <li><router-link to="/science">Science</router-link></li>
                                        <li><router-link to="/general">General</router-link></li>
              </ul>
          </transition>
      </nav>
  </div>
</template>
<script>
export default {
    name:"Navigation",
    data() {
        return {
            windowWidth:null,
            mobileNav:null,
            mobile:null,
        }
    },
        mounted() {
        window.addEventListener("resize",this.checkScreenSize);
        return this.checkScreenSize()
    },
    methods: {
         handleRotate() {
        this.mobileNav = !this.mobileNav;
    },
    checkScreenSize() {
        this.windowWidth = window.innerWidth;
        if(this.windowWidth <= 768) {
            this.mobile = true;
        } else {
            this.mobileNav = false;
            this.mobile = false;
        }
    }
    },
    }
</script>
<style scoped>
nav {
    height:10vh;
    width:100%;
    padding:10px;
    position:fixed;
    display:flex;
    justify-content:space-between;
    align-items: center;
    background:#fff;
}
.newsLogo {
    font-size:35px;
}
.colorNews {
    color:#ff0000;
}
.headerLinks ul {
    list-style:none;
    display:inline-flex;
    margin:10px;
}
.headerLinks ul li {
    margin:10px;
    font-size:20px;
    position:relative;
    cursor:pointer;
}
.headerLinks ul li::after {
    content:"";
    background:#ff0000;
    width:0;
    bottom:0;
    height:2px;
    position:absolute;
    transition:all .5s;
    display:block;

}
.headerLinks ul li:hover::after {
    width:100%;
}
.bar1,.bar2,.bar3 {
    margin: 5px;
    width: 35px;
    z-index:10;
    height: 3px;
    background-color: #000;
    transition: all 300ms cubic-bezier(.84,.06,.52,1.8);
}
.bar-rotate .bar1{
  transform: rotate(40deg) translate(10px,3px);
}
.bar-rotate .bar2 {
  opacity:0;
}
.bar-rotate .bar3{
  transform: rotate(-45deg) translate(9px,-2px);
}
.barButton {
  z-index:20;
   position:absolute;
   right:0;
}
.sidebar {
    height:100vh;
    width:300px;
   background:#f8f7f7;
    position:fixed;
    top:0;
    right:0;
}
.sidebar li {
  list-style:none;
  padding: 10px;
}
.sidebar li a {
  text-decoration:none;
  color: #000;
}
.slide-enter-from,
.slide-leave-to {
    opacity:0;
}
.slide-enter-active,
.slide-leave-active {
    transition:opacity .5s;
}
a {
  text-decoration:none;
  color:#000;
}
a.router-link-active {
    color:red;
}
.dropdown {
    display:none;
}
.headerLinks ul li:hover .dropdown {
    display:block;
    margin-left:-30px;
    position:absolute;
    background:#fff;
}

.headerLinks ul li:hover .dropdown ul {
    display:block;
}
.headerLinks ul li:hover .dropdown ul li {
    padding:5px;
    font-size:20px;
    width:200px;
    height:20px;
    color:#fff;
    position:relative;
}
.headerLinks ul li .dropdown ul li::after {
    display:none;
}
.headerLinks ul li:hover .dropdown ul li:hover::after {
    display:none;
}
@media (min-width:375px) and (max-width:415px) {
    nav {
        height:7vh;
        width:100%;
    }
}
@media(max-width:768px){
    a {
  text-decoration:none;
  color:#000;
}
a.router-link-active {
    color:red;
}
    nav {
        width:100%;
    }
    .sidebar {
        padding-top:50px;
    }
    .bar-button {
        display:block;
    }
}
</style>