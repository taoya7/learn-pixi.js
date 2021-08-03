<template>
  <div>
      <el-card>
          <h3 class="card-title">创建一个应用</h3> 
          <Application/>
      </el-card>
      <el-card>
        <h3 class="card-title">添加一张图片</h3>
        <Picture/>
      </el-card>
      <el-card>
        <h3 class="card-title">对精灵的操作</h3>
        <Handle/>  
      </el-card>
      <el-card>
        <h3 class="card-title">几何图形</h3>
        <Geometry/>
      </el-card>
      <el-card>
        <h3 class="card-title">鼠标轨迹</h3>
        <MouseMove/>
      </el-card>
      <el-card>
        <h3 class="card-title">拖动</h3>
        <Drag/>
      </el-card>
  </div>
</template>

<script setup>
import Application from './components/Application.vue';
import Picture from './components/Picture.vue';
import Handle from './components/Handle.vue';
import Geometry from './components/Geometry.vue';
import MouseMove from './components/MouseMove.vue';
import Drag from './components/Drag.vue';
</script>

<style>

</style>