<template>
  <el-row>
    <el-col :span=4>
      <div id="nav">
          <ul>
              <li v-for="nav in navs">
                  <router-link :to="nav.path">{{ nav.name }}</router-link>
              </li>
          </ul>
      </div>
    </el-col>
    <el-col :span=20>
      <div id="main">
        <router-view/>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {routes} from './router/index';
import { defineComponent } from 'vue'
import * as PIXI from 'pixi.js';
export default defineComponent({
  name: 'App',
  data(){
      return {
          navs: [],
      }
  },
  mounted() {
        this.navs = routes;
        console.log('%c Pixi 版本号: '+PIXI.VERSION,  'color: green; padding:20px;');
    }
})
</script>
